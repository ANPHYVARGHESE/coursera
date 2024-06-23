(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user = {};

  service.saveUser = function(user) {
    service.user = angular.copy(user);
    console.log(service.user.favoriteDish);
  }

  service.getUser = function() {
    return service.user;
    console.log(service.user);
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getFavoriteDish = function(short_name) {
   return $http.get(ApiPath + '/menu_items/' + short_name.split('')[0] +'/menu_items/'+ short_name.slice(1,short_name.length)+'.json');
 }
}






})();
