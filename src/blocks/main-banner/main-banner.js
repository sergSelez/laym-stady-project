import ready from '../../js/utils/documentReady'
import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';

ready(function() {
  const mainBannerSwiper = new Swiper('.main-banner__swiper', {
    // slidesPerView: 'auto',
    // spaceBetween: 10,
    // centeredSlides: true,
    // loop: true,
    // modules: [EffectCards, Pagination, Navigation],
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: '.main-banner__next',
    //   prevEl: '.main-banner__prev',
    // },
    // breakpoints: {
    //   1280: {
    //     loop: false,
    //     effect: "cards",
    //     grabCursor: true,
    //   }
    // }
    modules: [EffectCards, Pagination, Navigation],
    effect: "cards",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.main-banner__next',
      prevEl: '.main-banner__prev',
    },
  });
})