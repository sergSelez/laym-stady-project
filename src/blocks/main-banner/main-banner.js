import ready from '../../js/utils/documentReady'
import Swiper, { Navigation, Pagination } from 'swiper';

ready(function() {
  const mainBannerSwiper = new Swiper('.main-banner__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    modules: [Pagination, Navigation],
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