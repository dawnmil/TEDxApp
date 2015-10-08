app.service('Map', function($q) {
	this.init = function() {
		var options = {
			center: new google.maps.LatLng(39.7519023, -75.5624548),
			zoom: 13,
			disableDefaultUI: true
		}
		this.map = new google.maps.Map(
			document.getElementById("map"),
			options
		);
	}
})