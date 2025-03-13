$(document).ready(function() {

  $(document).on('mousemove', function(e) {
    let mouseX = e.pageX-4;
    let mouseY = e.pageY-150;

    // 새로운 점 생성(잔상)
    let cursor = $('<div class="allow"></div>');
    cursor.css({
        top: mouseY + 'px',
        left: mouseX + 'px'
    });
    // body에 점 추가
    $('body').append(cursor);

    // 0.5초 후에 점의 opacity를 0으로 설정
    setTimeout(function() {
      cursor.css({
        width: '0px',
        height: '0px'
      });
    }, 300); // 즉시 opacity를 0으로 설정
    // 0.2초 후에 점의 width, height를 0으로 설정
    setTimeout(function() {
      cursor.css({
        width: '0px',
        height: '0px'
      });
    }, 200);

    // 0.8초 후에 점을 제거
    setTimeout(function() {
        cursor.remove();
    }, 800); // 0.8초 후에 점 제거
  });

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

  let aboutOuter;
  let portfolioOuter;
  let contactOuter;
  let aboutBottom;
  let portfolioBottom;
  let contactBottom;
  updateBottoms();

  // scroll navbar css + content animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.navbar-default').css('background-color', 'rgba(248, 248, 248, 0.7)');
    } else {
      $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0)');
    }

    const scrollTop = $(this).scrollTop(); // 현재 스크롤 위치
    const windowHeight = $(this).height(); // 현재 창의 높이
    // scrollTop+windowHeight => 현재 스크롤 위치(top 기준) + 현재 창의 높이 
    // = 현재 스크롤 위치(bottom 기준)

    // 현재 스크롤 위치가 content의 bottom 위치보다 크거나 같으면 content가 보이게 함
    // /num = content의 /num 만큼 스크롤이 내려가면 content가 보이게 함
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
  // 화면 크기가 변경될 때마다 bottom값을 업데이트
  // + 작은 메뉴창이 특정 크기를 벗어나면 자동 닫힘
  $(window).resize(function() {
    updateBottoms();
    if ($(window).width() > 767) {
      $('.navbar-collapse.collapse').removeClass('in');
      $('.navbar-toggle').css('transform', 'rotate(0deg)');
    }
  });

  // 모달 자동재생
  // (safari에서는 DOM 로드가 되자마자 자동재생과 함께 모달이 열려서 모달을 열 때만 자동재생)
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

  // menu icon
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

  // scroll 효과를 위한 값 업데이트
  function updateBottoms() {
    aboutOuter = $('#about').outerHeight();
    portfolioOuter = $('#portfolio').outerHeight();
    contactOuter = $('#contact').outerHeight();
    // content의 top 위치+content의 높이 = content의 bottom 위치
    aboutBottom = $('#about').offset().top + aboutOuter;
    portfolioBottom = $('#portfolio').offset().top + portfolioOuter;
    contactBottom = $('#contact').offset().top + contactOuter;
  }
});
