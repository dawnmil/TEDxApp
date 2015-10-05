var app = angular.module('TEDxApp.controllers', []);


app.controller('LocationCtrl', function($scope, Locations) {
	$scope.locations = Locations.all();
});

app.controller('LocationDetailCtrl', function($scope, $stateParams, Locations) {
  $scope.locationH = Locations.get($stateParams.locationId);
  $scope.Stars = [];
  for (var x = 0; x < $scope.locationH.starRating; x++){
  	$scope.Stars.push(x);
  }

});

