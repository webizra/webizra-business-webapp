/*===== PRELOADER EFFECT =====*/
$(window).on('load', function() {
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");
});


/*===== PORTFOLIO =====*/
$('.portfolio__slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin : 30,
	autoplay: true,
	navText: ['<i class="ri-arrow-left-circle-fill"></i>', '<i class="ri-arrow-right-circle-fill"></i>'],
	responsive : {
		0 : {
			items: 1,
		},
		480 : {
			items: 1,
		},
		768 : {
			items: 2,
		},
		1200 : {
			items: 3,
		}
	}
});

$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
});


