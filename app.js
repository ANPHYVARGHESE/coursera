(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('SearchController', SearchController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
      var ddo = {
          templateUrl: 'availItems.html',
          scope: {
              items: '<',
              onRemove: '&'
          }
      };
      return ddo;
  }


  SearchController.$inject = ['MenuSearchService'];
  function SearchController(MenuSearchService) {
    var searchCtrl = this;
    searchCtrl.searchTerm = '';
    searchCtrl.found = [];

    searchCtrl.search = function () {
      searchCtrl.found = [];
      if (searchCtrl.searchTerm.trim() != "") {
          var promise = MenuSearchService.getMatchedMenuItems(searchCtrl.searchTerm);
          promise.then(function (result) {
              searchCtrl.found = result;
              console.log(result);
          })
          .catch(function (error) {
              console.log("Something went wrong: " + error);
			  searchCtrl.search = "Nothing found 2";
          });
      }
    }

    searchCtrl.remove = function (index) {
      searchCtrl.found.splice(index, 1);
    }

  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

      return response.then(function (result) {
          var searchItems = [];
          var data = result.data;

          for (var category in data) {
              searchItems.push( data[category].menu_items.filter( item => item.description.toLowerCase().includes(searchTerm.toLowerCase()) )
              );
          }
          return searchItems.flat();
      });
    };

  }

  })();
