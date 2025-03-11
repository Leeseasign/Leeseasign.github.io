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

  // const intro = $('#intro').offset().top;
  // top을 기준으로 하면 스크롤이 많이 내려가면 안보이는 문제가 발생
  // bottom을 기준 => 컨텐츠의 top기준 위치 + 컨텐츠의 높이
  let aboutBottom = $('#about').offset().top + $('#about').outerHeight();
  let portfolioBottom = $('#portfolio').offset().top + $('#portfolio').outerHeight();
  let contactBottom = $('#contact').offset().top + $('#contact').outerHeight();
  let aboutOuter = $('#about').outerHeight();
  let portfolioOuter = $('#portfolio').outerHeight();
  let contactOuter = $('#contact').outerHeight();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.7)');
    } else {
      $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0)');
    }

    const scrollTop = $(this).scrollTop();
    const windowHeight = $(this).height();
    if(scrollTop+windowHeight >= aboutBottom-(aboutOuter/2)){
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
    if(scrollTop+windowHeight >= portfolioBottom-(portfolioOuter/1.2)){
      $('#portfolio>.title, #portfolio>.row').css({
        opacity: 1, 
        transform: 'translateX(0px) skewX(0deg)',
      });
    }else{
      $('#portfolio>.title, #portfolio>.row').css({
        opacity: 0,
        transform: 'translateX(-100px) skewX(10deg)',
      });
      console.log($('#portfolio>.row'));
    }
    if(scrollTop+windowHeight >= contactBottom-(contactOuter/2)){
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
    updateBottoms();
    if ($(window).width() > 767) {
      $('.navbar-collapse.collapse').removeClass('in');
      $('.navbar-toggle').css('transform', 'rotate(0deg)');
    }
  });

  // 모달 자동재생
  $('[id^="pjt"][id$="-Modal"]').on('shown.bs.modal', function () {
    const video = $(this).find('video')[0];
    if (video) {
      video.play();
    }
  });
  $('[id^="pjt"][id$="-Modal"]').on('hidden.bs.modal', function () {
    const video = $(this).find('video')[0];
    if (video) {
      video.pause();
      video.currentTime = 0; // 비디오를 처음으로 리셋
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
  function updateBottoms() {
    aboutBottom = $('#about').offset().top + $('#about').outerHeight();
    portfolioBottom = $('#portfolio').offset().top + $('#portfolio').outerHeight();
    contactBottom = $('#contact').offset().top + $('#contact').outerHeight();

    aboutOuter = $('#about').outerHeight();
    portfolioOuter = $('#portfolio').outerHeight();
    contactOuter = $('#contact').outerHeight();
  }
});
