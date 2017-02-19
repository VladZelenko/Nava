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

//uploading img x3, gallery 1
function showImages(){
	var images = $('.hide')
	if (images.length == 0){
		$('button#galery-btn').hide(2000);
	}
	else {
		$('.hide').slice(0,3).removeClass('hide')
	}
}
//gallery 2
function showImagesPrice(){
	var images = $('.hide-up')
	if (images.length == 0){
		$('button#galery-price-btn').hide(2000);
	}
	else {
		$('.hide-up').slice(0,3).removeClass('hide-up')
	}
}

// $(document).ready(function(){
// 	$('.up-btn').click(function(){
// 			$('.hidden__files').slice(0,3).removeClass('.hidden__files')
// 	});
// });

//popup
$(document).ready(function(){
	$('a.poplight[href*=\\#]').click(function() {
		var popID = $(this).attr('rel');
		var popURL = $(this).attr('href');
		var query= popURL.split('?');
		var dim= query[1].split('&');
		var popWidth = dim[0].split('=')[1];

		$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" title="Закрыть" class="close"></a>');
		var popMargTop = ($('#' + popID).height() + 80) / 2;
		var popMargLeft = ($('#' + popID).width() + 80) / 2;

		$('#' + popID).css({
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});

		$('body').append('<div id="fade"></div>');
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
		return false;
	});
        $(document).on('click', 'a.close, #fade', function() {
        $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();
    });
    return false;
   });
});