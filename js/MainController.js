app.controller('MainController', ['$scope', '$resource', function($scope, $resource){
        $scope.monsters = $resource('//pokeapi.co/api/v2/pokemon').get();
        //$scope.monsters = [{name: "Eevee"}];
      }]);