(
    function () {
     var app = angular.module('menuApp')
     .controller('ItemController',  ItemController)
     ItemController.$inject = ['$stateParams','resData' ]

     function ItemController ( $stateParams,resData) {
       var item = this
       var id = $stateParams.id
       item.category = resData[id].category
       item.items = resData[id].menu_items

       console.log(item.items)

     }

    }
)();
