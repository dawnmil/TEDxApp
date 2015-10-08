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

app.controller('MapCtrl', function($scope){

	google.maps.event.addDomListener(window, 'load', function(){
		var mapOptions = {
			center: new google.maps.LatLng(39.7654406,-75.6385324),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	});
});

