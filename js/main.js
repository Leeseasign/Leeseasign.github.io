$(document).ready(function() {
  // scroll
  var scrollHeight = $(window).scrollTop(); // reloade했을 때의 scrollHeight  
  if(scrollHeight>10){
    $('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.7)');
  }else{
    $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0)');
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.7)');
    } else {
      $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0)');
    }
  });

  //resize
  $(window).resize(function() {
    if ($(window).width() > 767) {
      $('.navbar-collapse.collapse').removeClass('in');
      $('.navbar-toggle').css('transform', 'rotate(0deg)');
    }
  });

  $('.navbar-header>button').on('click', function() {
    $('.navbar-collapse.collapse').hasClass('in') ? $('.navbar-collapse.collapse').removeClass('in') : $('.navbar-collapse.collapse').addClass('in');
    $('.navbar-collapse.collapse').hasClass('in') ? $('.navbar-collapse.collapse').css('height', '180px') : $('.navbar-collapse.collapse').css('height', '0px');
    $('.navbar-collapse.collapse').hasClass('in') ? $('.navbar-toggle').css('transform', 'rotate(90deg)') : $('.navbar-toggle').css('transform', 'rotate(0deg)');
    $('.navbar-collapse.collapse').hasClass('in') ? $('.navbar-collapse.collapse').addClass('animate__flipInX') : $('.navbar-collapse.collapse').removeClass('animate__flipInX');
    $('.navbar-collapse.collapse').hasClass('in') ? $('.navbar-collapse.collapse').removeClass('animate__flipOutX') : $('.navbar-collapse.collapse').addClass('animate__flipOutX');
  });
  $('.nav.navbar-nav a').on('click', function() {
    $('.navbar-toggle').css('transform', 'rotate(0deg)');
    $('.navbar-collapse.collapse').removeClass('in');
  });
});