$(document).ready(function() {
	ymaps.ready(initialize);

    ymaps.ready(initializePageMap);
});



//FUNCTIONS
function initialize() {
    if ($('#map-default').length>0) {

        var myMap = new ymaps.Map("map-default", {
            center:[53.899888,27.566757],
            zoom: 15,
            controls: []
        }); 
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                // balloonContentBody: 'Адрес',
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [100,120],
            iconImageOffset: [-50, -120],
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
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
        var myMap = new ymaps.Map("page-map", {
            center:[53.899888,27.566757],
            zoom: 15,
            controls: [],
        }, {
          suppressMapOpenBlock: false,
          yandexMapDisablePoiInteractivity: true
        });
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                //hintContent: 'test',
                balloonContentBody: [
                    '<div class="map-wrapper">' +
                    '<div class="map-info">Минский район, Знаменский сельсовет 47/1,район поселка Белое озеро</div>' +
                    '<div class="map-coords">N:51°82 01.11 E:23°70 07.93</div>' +
                    '<div class="map-phone">+375 162 510 694</div>' +
                    '<a href="#feedback-popup2" class="btn-submit js-popup-inline-feedback" data-effect="mfp-zoom-in" onclick="openPopup()">Написать нам</a>' +
                    '</div>',
                ],
                maxWidth:445,
                shadow:false,
                balloonOffset: [-100, -230],
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [100,120],
            iconImageOffset: [-50, -120],
            balloonOffset: [-160, -5],
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
        if ($(window).width() < 800) {
           myPlacemark.balloon.close();
        }
        else {
           myPlacemark.balloon.open(myMap.getCenter(), {});
        }
        
    }
}




