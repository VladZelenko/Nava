$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.nav');
	
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});


//
$(document).ready(function() {
	$(".gallery-img").fancybox({
		"padding" : 5,
		"imageScale" : true,
		"zoomOpacity" : 0.8,
		"zoomSpeedIn" : 3000,
		"zoomSpeedOut" : 3000,
		"zoomSpeedChange" : 2000,
		"frameWidth" : 700,
		"frameHeight" : 600,
		"overlayShow" : true,
		"overlayOpacity" : 0.8,
		"hideOnContentClick" :false,
		"centerOnScroll" : false
	});
	$("#more").fancybox({
		"hideOnContentClick" : true
	});
});