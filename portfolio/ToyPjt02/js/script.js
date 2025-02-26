$(document).ready(function(){
  function navActive(){
    $("nav.navbar").addClass("nav-back2");
    $("nav.navbar").removeClass("nav-back1");
    $("nav.navbar-light ul.navbar-nav li:not(:last-child) a").addClass("nav-text2");
    $("nav.navbar-light ul.navbar-nav li:not(:last-child) a").removeClass("nav-text1");
    $(".navbar-brand img.logo_img1").addClass("hide");
    $(".navbar-brand img.logo_img2").removeClass("hide");
  }
  function navInit(){
    $("nav.navbar").removeClass("nav-back2");
    $("nav.navbar").addClass("nav-back1");
    $("nav.navbar-light ul.navbar-nav li:not(:last-child) a").addClass("nav-text1");
    $("nav.navbar-light ul.navbar-nav li:not(:last-child) a").removeClass("nav-text2");
    $(".navbar-brand img.logo_img1").removeClass("hide");
    $(".navbar-brand img.logo_img2").addClass("hide");
  }

  // resize 이벤트
  let winWidth = $(window).width();
  $(window).resize(function(){
    winWidth = $(window).width();
  });

  // 스크롤 이벤트
  $(window).scroll(function(){
    let scrollPosition = $(window).scrollTop(); // 현재 스크롤바 위치 
    navActive();
    if(winWidth > 979){
      if(scrollPosition > 100){
        navActive();
      }else{
        navInit();
      }
    }else{
      navActive();
    }

    let scrollList = [];
    let targetOffset = $("#partner").offset().top;

    
    
    // if(scrollPosition+$(window).height() > targetOffset+$("#partner").height()){
    if(scrollPosition+$(window).height() > targetOffset){
      $("#partner").addClass("animate__animated").addClass("animate__fadeInUp");
    }
  });
});