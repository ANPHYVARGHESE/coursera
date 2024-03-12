
(function () {
    'use strict';

  angular.module('ShoppingList', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .controller('AddtoList',AddtoList)
  .service('ShoppingListService',ShoppingListService);

  function ShoppingListService() {
    var service = this ;


    var addItems = [
      {
        name: "cookies",
        quantity: "10"
      },
      {
        name: "Milk",
        quantity: "10"
      },
      {
        name: "Chocolate",
        quantity: "10"
      },
      {
        name: "Ice-cream",
        quantity: "10"
      },
      {
        name: "Noodles",
        quantity: "10"
      }
    ];
    var alreadyItems = [];
    service.getaddItems = function functionName() {
      return addItems ;
    }

    service.getAlreadyItems = function functionName() {
      return alreadyItems ;
    }

    service.buyItem = function (itemIndex) {

      var item = addItems[itemIndex];
      alreadyItems.push(item);
      addItems.splice(itemIndex,1);
    }


  }

  AddtoList.$inject = ['ShoppingListService'];
  function AddtoList(ShoppingListService) {
  var insert = this ;
}



  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {

  var toBuy = this;
  toBuy.items = ShoppingListService.getaddItems();

  toBuy.buyItem = function(itemIndex) {
  ShoppingListService.buyItem(itemIndex);
  }

  toBuy.errorMessage = function () {
    if(toBuy.items.length > 0)
      return false ;

    return true ;
  }

}



AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var already = this ;

  already.items=ShoppingListService.getAlreadyItems();

  already.errorMessage = function () {
    if(already.items.length > 0)
      return false ;

    return true ;
  }
}

    })();
