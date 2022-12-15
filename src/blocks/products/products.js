import ready from '../../js/utils/documentReady'
import Swiper, { Navigation, Scrollbar } from 'swiper';

ready(function() {
  const promotionalSwiper = new Swiper('.promotional__swipper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    modules: [Scrollbar, Navigation],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
        scrollbar: false,
        navigation: {
          nextEl: '.products__next',
          prevEl: '.products__prev',
        },
      }
    }
  });

  const newsSwiper = new Swiper('.news__swipper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    modules: [Scrollbar, Navigation],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
        scrollbar: false,
        navigation: {
          nextEl: '.products__next',
          prevEl: '.products__prev',
        },
      }
    }
  });

  const veganSwiper = new Swiper('.vegan__swipper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    modules: [Scrollbar, Navigation],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
        scrollbar: false,
        navigation: {
          nextEl: '.products__next',
          prevEl: '.products__prev',
        },
      }
    }
  });

  const popularSwiper = new Swiper('.popular__swipper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    modules: [Scrollbar, Navigation],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
        scrollbar: false,
        navigation: {
          nextEl: '.products__next',
          prevEl: '.products__prev',
        },
      }
    }
  });
})