$(document).ready(function() {
  // scroll
  let scrollHeight = $(window).scrollTop(); // reloade했을 때의 scrollHeight  
  if(scrollHeight>10){
    $('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.7)');
    $('#intro').css({
      opacity: 1,
      transform: 'translateY(0px)'
    });
  }else{
    $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#intro').css({
      opacity: 1,
      transform: 'translateY(0px)'
    });
  }

  const intro = $('#intro').offset().top;
  const about = $('#about').offset().top;
  const portfolio = $('#portfolio').offset().top;
  const contact = $('#contact').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.7)');
    } else {
      $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0)');
    }

    if($(this).scrollTop() >= about-400){
      $('#about').css({
        opacity: 1,
        transform: 'translateY(0px)'
      });
    }else{
      $('#about').css({
        opacity: 0,
        transform: 'translateY(50px)'
      });
    }
    if($(this).scrollTop() >= portfolio-300){
      $('#portfolio').css({
        opacity: 1,
        transform: 'translateX(0px) skewX(0deg)',
        height: '100%',
        overflow: 'hidden'
      });
    }else{
      $('#portfolio').css({
        opacity: 0,
        transform: 'translateX(-100px) skewX(10deg)',
        height: '0'
      });
    }
    if($(this).scrollTop() >= contact-500){
      $('#contact').css({
        opacity: 1,
        transform: 'translateY(0px)'
      });
    }else{
      $('#contact').css({
        opacity: 0,
        transform: 'translateY(-50px)'
      });
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