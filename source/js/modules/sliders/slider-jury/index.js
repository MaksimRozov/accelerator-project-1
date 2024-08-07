import { Swiper } from '../../../vendor/swiper/swiper.min.js';
import { Navigation } from '../../../vendor/swiper/modules';

const swiperJury = document.querySelector('.swiper-jury');

const sliderJuryInit = () => {
  if (swiperJury) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(swiperJury, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: '.jury__button--next',
        prevEl: '.jury__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          simulateTouch: false,

        },

        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },

    });
  }
};


export { sliderJuryInit };
