jQuery(document).ready(function($) {

  /* Show the main menu */
  $('.sidebar-first .icon').click(function(e) {
    $(this).parent().find('.inner').slideDown();
    e.preventDefault();
    return false;
  });
});