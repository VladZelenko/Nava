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


//fancyBox - modal img
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
		"centerOnScroll" : false,
		"cyclic" : false
	});
	$("#more").fancybox({
		"hideOnContentClick" : true
	});
});

//uploading img x3
$(document).ready(function(){
	$('.up-btn').click(function(){
			$('.hidden__files').slice(0,3).css({"display" : "block"}).removeClass('.hidden_files');
	});
});
// $(document).ready(function(){
// 	$('.up-btn').click(function(){
// 		var a = $('.hidden__files');
// 		for (i = 0, i <= 3, i++){
// 			for ( j = 0, j <= a.length, j++) {

// 			}
// 		}
// 	});
// });

//мб спрацює за деяких умов
// if (a.length == 0) {
// 	$('.up-btn').css({"display" : "none"})
// }