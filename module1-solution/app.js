(function () {
    'Use strict'
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', function ($scope) {
            $scope.lunchlist = "";
            $scope.message="";
            $scope.Calculatelunchitems = function () {
                var numerictotalvalue = calculatenumberforlunch($scope.lunchlist);
                if(numerictotalvalue == 0)
                {
                  $scope.message= "Please enter data first" ;
                }

                else if(numerictotalvalue <= 3 && numerictotalvalue > 0){
                  $scope.message= "Enjoy!";
                }
                else if (numerictotalvalue > 3){
                  $scope.message= "Too much!" ;
                }

            };
            function calculatenumberforlunch(stringsp){
              var returnvalue = 0;
               if(stringsp.trim() == "")
               {
                 returnvalue = 0;
               }
               else{
                const arrayOfStrings = stringsp.split(",");
                returnvalue = arrayOfStrings.length;
              }
              return returnvalue
            }
        })
}) ();
