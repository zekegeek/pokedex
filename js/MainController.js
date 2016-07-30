app.controller('MainController', ['$scope', '$resource', function($scope, $resource){
		//$scope.selectedPokemon = null;
      $scope.monsters = [];
      $scope.types = [];
      $scope.selectedTypes = [];

      $scope.setSelectedTypes = function () {
        	$scope.selectedTypes = $scope.types.filter(function(t){
        		return t.checked === true;
        });
      };

      /*$scope.setSelectedPokemon = function() {
      	var url= $resource('//pokeapi.co/api/v2/' +pokemon.name);
      	$http.get(url).success(function(data) {
      		$scope.results = data;
      	}
      };
      $scope.setSelectedPokemon();
      });*/

      $scope.isTypeSelected = function(element) {
      	return $scope.selectedTypes.filter(function(s){
      		return s.name === element.type;
      	}).length > 0;
      };

      var typesRequest = $resource('//pokeapi.co/api/v2/type').get(
      	function(typesResponse){
      		$scope.types = typesResponse.results;

      		angular.forEach(typesResponse.results, function(monsterType){
      			$resource(monsterType.url).get(function(monsterTypeDetailResponse){
      				Array.prototype.push.apply($scope.monsters,
      					monsterTypeDetailResponse.pokemon.map(function(p){
      						p.pokemon.type = monsterTypeDetailResponse.name;
      						return p.pokemon;
      					}));
      			});
      		});
      	});
  }]);