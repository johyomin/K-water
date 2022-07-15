$(document).ready(function () {});
window.onload = function () {
  let rNum = Math.floor(Math.random() * 3);
  let rClass = 'about-box-char-' + rNum;
  let rTag = $('.about-box-sns');
  rTag.addClass(rClass);

  let header = $('.header');
  let gnb = $('.gnb');
  let gnbH = gnb.height();

  gnb.mouseenter(function () {
    header.css('height', gnbH);
  });
  gnb.mouseleave(function () {
    header.css('height', 70);
  });

  new Swiper('.sw-visual', {
    slidesPerView: 8,
    loop: true,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  });

  let swAbout = new Swiper('.sw-about', {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    speed: 500,
    pagination: {
      el: '.sw-about-pg',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.sw-about-next',
      prevEl: '.sw-about-prev'
    },
    allowTouchMove: false
  });

  let swAboutBt = $('.sw-about-pause');
  swAboutBt.click(function () {
    let temp = $(this).hasClass('sw-about-play');
    if (temp == true) {
      swAbout.autoplay.start();
      $(this).removeClass('sw-about-play');
    } else {
      swAbout.autoplay.stop();
      $(this).addClass('sw-about-play');
    }
  });

};