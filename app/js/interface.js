$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })

	//HEADER FIX
	var shrinkHeader = 80;
	var scroll = getCurrentScroll();
  	if ( scroll >= shrinkHeader ) {
       $('.page-header').addClass('fixed');
    }
    else {
        $('.page-header').removeClass('fixed');
    }
	function getCurrentScroll() {
    	return window.pageYOffset || document.documentElement.scrollTop;
    }

	//MOBILE-MENU
	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		// $(this).addClass('active');
		$('body').addClass('hidden');
		
		$('.menu-mobile').addClass('active');
	});
	$('body').on('click','.menu-mobile__close', function(e){
		e.preventDefault();
		$('body').removeClass('hidden');

		$('.menu-mobile').removeClass('active');
	});


	//MOBILE MENU SECOND LEVEL
	$('body').on('click','.menu-mobile-second__link--submenu', function(e){
		e.preventDefault();
		$('.menu-mobile-second__wrap').addClass('hidden');
		$('.menu-mobile-third').addClass('active');
	});
	$('body').on('click','.menu-mobile-third__back', function(e){
		e.preventDefault();
		$('.menu-mobile-second__wrap').removeClass('hidden');
		$('.menu-mobile-third').removeClass('active');
	});



	//MORE
	$('body').on('click','.js-more-btn', function(e){
		e.preventDefault();
		// $(this).addClass('active');
		$('body').addClass('hidden');
		
		$('.more').addClass('active');
	});
	$('body').on('click','.js-more-close', function(e){
		e.preventDefault();
		$('body').removeClass('hidden');

		$('.more').removeClass('active');
	});

	//ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });
    $("body").on("click", ".js-accordeon__close", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').removeClass('active');
        $(this).parents('.accordeon__info').slideUp();
    })


    //POPUP-VIDEO
    $('.js-video').magnificPopup({
        type: 'iframe',
        removalDelay: 500,
        closeBtnInside: false,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function(){
                $('body').addClass('noscroll');
            },
            close: function() {
                 $('body').removeClass('noscroll');
            }
        },

        //midClick: true,
    });




    //TABS
    if ($('.resp-tabs').length>0) {
	    $('.resp-tabs').responsiveTabs({
		    startCollapsed: 'accordion'
		});
	}


	//HINT
	$("body").on("click", ".js-hint__link", function(e){
        e.preventDefault();
        $(this).next('.hint__info').fadeToggle(100);
    });
    $("body").on("click", ".js-hint__close", function(e){
        e.preventDefault();
        $(this).parents('.hint__info').fadeOut(100);
    });



    //FS
    if ($('.fs').length>0) {
    	$('.fs').styler();
    }


    //POPUP-INLINE
	$('.js-popup-inline').magnificPopup({
		type: 'inline',
		removalDelay: 500,

		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			open: function(){
		    }
		},

		//midClick: true,
	});

	//POPUP-GALLERY
	$('.js-gallery').magnificPopup({
	  	type: 'image',
	  	gallery:{enabled:true},
	  	closeOnContentClick: true,
        closeBtnInside: false,
        removalDelay: 300,
        // fixedContentPos: false,
        mainClass: 'mfp-with-fade',
	  	callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			imageLoadComplete: function() { 
                var self = this;
                setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
            }
		},
	})




	//SERVICE slider
	if ($('.services-slider').length>0) {
		var $gallery = $('.services-slider');

	    $gallery.slick({
			speed: 250,
			// fade: true,
			// cssEase: 'linear',
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 3,
  			slidesToScroll: 1,
  			responsive: [
			    {
			      breakpoint: 1000,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 550,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        adaptiveHeight:true,
			      }
			    },
			]
	    });
	};
});




$(window).resize(function () {

});


$(function(){
 	var shrinkHeader = 80;
  	$(window).scroll(function() {
    	var scroll = getCurrentScroll();
      	if ( scroll >= shrinkHeader ) {
           $('.page-header').addClass('fixed');
        }
        else {
            $('.page-header').removeClass('fixed');
        }
  	});
	function getCurrentScroll() {
    	return window.pageYOffset || document.documentElement.scrollTop;
    }
});



// $(function() {
// 	$(".submenu__item").mouseover(function(e) {
// 		e.preventDefault();
// 	    var menu = $(this).data('menu');
//         $(".submenu-bg__item").removeClass('active');
//         $("#image"+menu).addClass('active');
// 	}), $(".submenu__item").mouseleave(function(e) {
// 	    $(".submenu-bg__item").removeClass('active');
// 	})
// });


//DATEPICKER
$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('.input-calendar').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('.input-calendar').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});


// $(window).load(function(){

// });

// functions


// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="about.html">About</a></li> \
		<li><a href="usluga-page.html">Usluga-page</a></li> \
		<li><a href="gallery.html">Gallery</a></li> \
		<li><a href="list.html">List</a></li> \
		<li><a href="index.html">Index</a></li> \
	</ol> \
</div>');
