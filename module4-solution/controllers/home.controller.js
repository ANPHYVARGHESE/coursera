(
    function () {
        var app = angular.module('menuApp')
       .controller('HomeController', HomeController);
        function HomeController() {
            var ctrl = this;
            ctrl.title = 'Welcome to Restaurant Application';
        }



    }
)();
