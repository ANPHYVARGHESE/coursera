(function() {
    'use strict';

    var infoController = function(MenuService, ApiPath) {
        var vm = this;
        vm.apiPath = ApiPath;

        vm.signedUp = false;

        vm.user = MenuService.getUser();


        if (angular.equals(vm.user, {})) {
            vm.signedUp = false;
        } else {
            vm.signedUp = true;
            vm.filepath = vm.user.favoriteDish.split('')[0];
            console.log('User is', vm.filepath);
        }
    };

    infoController.$inject = ['MenuService', 'ApiPath'];
    angular.module('public').controller('InfoController', infoController);
})();
