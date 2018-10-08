$(document).ready(function() {
	initialize();

    initializePageMap();
});



//FUNCTIONS
function initialize() {
    if ($('#map-default').length>0) {
    	var latlng = new google.maps.LatLng(53.899888,27.566757);
    	var icon = "img/svg/label.svg";
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

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable: false,
            icon: "img/svg/label.svg",
        });

    	//resize map
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }
}

function openPopup() {
    $('.js-popup-inline-feedback').magnificPopup({
        type: 'inline',
        removalDelay: 500,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function(){
                $('body').addClass('hidden');
            },
            close: function() {
                 $('body').removeClass('hidden');
            }
        },

        //midClick: true,
    }).magnificPopup('open');
}

function initializePageMap() {
    if ($('#page-map').length>0) {
        var latlng = new google.maps.LatLng(53.899888,27.566757);
        var icon = "img/svg/label.svg";
        var myOptions = {
            center: latlng,
            zoom: 15,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],
            mapTypeControl: false,
            navigationControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
        };
        var map = new google.maps.Map(document.getElementById("page-map"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable: false,
            icon: "img/svg/label.svg",
        });

        // Add a Snazzy Info Window to the marker
        var info = new SnazzyInfoWindow({
            marker: marker,
            maxWidth: 445,
            offset: {
              top: '2px'
            },
            content: '<div class="map-logo"></div>' +
                     '<div class="map-info">Минский район, Знаменский сельсовет 47/1,район поселка Белое озеро</div>' +
                     '<div class="map-coords">N:51°82 01.11 E:23°70 07.93</div>' +
                     '<div class="map-phone">+375 162 510 694</div>' +
                     '<a href="#feedback-popup2" class="btn-submit js-popup-inline-feedback" data-effect="mfp-zoom-in" onclick="openPopup()">Написать нам</a>',
            closeOnMapClick: false
        });
        info.open();


        // if ($(window).width() > 768) {
        //     map.panBy(0,-200);
        // }

        //resize map
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);

            // if ($(window).width() < 768) {
            //     info.close();

            //     // map.panBy(0,0);
            // }
            // else{
            //     info.open();

            //     // map.panBy(0,-200);
            // }
        });



        // $(window).resize(function () {
        //     if (true) {
                
        //     }
        // });
    }
}




