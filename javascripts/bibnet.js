jQuery(document).ready(function($) {

  /* Show the main menu */
  $('.sidebar-first .icon').click(function(e) {
    $(this).parent().find('.inner').slideDown();
    e.preventDefault();
    return false;
  });
  
  /* Hide the main menu */
  $('.sidebar-first .close-menu a').click(function(e) {
    $(this).parent().parent().parent().find('.inner').hide();
    e.preventDefault();
    return false;
  });

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

});