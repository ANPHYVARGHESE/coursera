(function() {
    'use strict';

    var signupController = function(MenuService) {
        var vm = this;

        vm.user = {};
        vm.favoriteDish = {};

        vm.showError = false;       // When this value is true error about the favorite dish wiil be shown
        vm.showMessage = false;     // When this value is true message about successfull signup will be shown

        vm.signup = function(form) {
            vm.showError = false;
            vm.showMessage = false;
            vm.registrationSuccess = false;
            // If the form is not valid don't submit
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }




            MenuService.getFavoriteDish(vm.user.favoriteDish).then(function(response) {
                vm.user.favoriteDishDetails = response.data;
                console.log(response.data);
                if(response.data!=null){

                MenuService.saveUser(vm.user);
                vm.user.filepath = vm.user.favoriteDish.split('')[0];
                vm.showMessage = true;
                vm.registrationSuccess = true;
              }
              else {
                vm.showError = true;
              }
            }, function(error) {
                console.log(error);
                vm.showError = true;
                vm.registrationSuccess = true;
            });

        }
    };


    signupController.$inject = ['MenuService'];
    angular.module('public').controller('SignupController', signupController);
})();
