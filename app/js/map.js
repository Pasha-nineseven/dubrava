$(document).ready(function() {
	initialize();

});



//FUNCTIONS
function initialize() {
	var latlng = new google.maps.LatLng(53.899888,27.566757);
	//var icon = "img/content/icon.png";
	var myOptions = {
		center: latlng,
        zoom: 15,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
	};
	var map = new google.maps.Map(document.getElementById("map-default"), myOptions);



	//resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}