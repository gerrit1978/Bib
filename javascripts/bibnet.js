jQuery(document).ready(function($) {

  /* Toggle info text */
  $('.toggle-text').click(function(e) {
    $('#info-text').toggle();
  });

  /* Show the main menu */
  $('.sidebar-first .icon').click(function(e) {
    $(this).parent().find('.inner').slideDown();
    e.preventDefault();
    return false;
  });
  
  /* Hide the main menu on close button click */
  $('.sidebar-first .close-menu a').click(function(e) {
    $(this).parent().parent().parent().find('.inner').hide();
    e.preventDefault();
    return false;
  });
  
  /* Hide the main menu on active menu item click */
  $('.sidebar-first a.active').click(function(e) {
    $('.sidebar-first .inner').hide();
    e.preventDefault();
    return false;
  });
  
  $('body').click(function(e) {
    $('.sidebar-first .inner').hide();
    e.preventDefault();
    return false;
  }).find('.sidebar-first .inner ul').click(function(e) {
    e.stopPropagation();
  });;

  /* Show general preloader when clicking an external link */
  $('a').click(function(e) {
		if ($(this).attr('href').search(/#/) == -1 && $(this).attr('href').search(/http/) != -1) {
      $('#preloader-general').show();
    } 
	});
	
	$('a.verleng-alles').click(function(e) {
    var list = $(this).parent().find('ul.items');
    list.each(function() {
      console.log($(this).find('li.item').find('.loader').show());
    });
    /* En nog wat andere calls hier uiteraard */
    e.preventDefault();
    return false;
	});
	
	/* Toggle Details betalingen en uitleenhistoriek */
	$('a.show-details-betaling').click(function(e) {
	  var details = $(this).parent().find('.details');
    details.toggle();
    if (details.is(':visible')) { 
      $(this).html('Verberg details &uarr;');   
    } else {
      $(this).html('Toon details &darr;');
    }
    e.preventDefault();
    return false;
	});
	$('a.show-details-historiek').click(function(e) {
	  var details = $(this).parent().find('.details');
    details.toggle();
    if (details.is(':visible')) { 
      $(this).html('Verberg uitleenhistoriek &uarr;');   
    } else {
      $(this).html('Toon uitleenhistoriek &darr;');
    }
    e.preventDefault();
    return false;
	});

  /* Tooltips */
  $(".tooltipinit").tooltip();

	
});