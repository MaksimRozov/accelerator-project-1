import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperJury = document.querySelector('.swiper-jury');

const sliderJuryInit = () => {
  if (swiperJury) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(swiperJury, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: false,
      speed: 500,
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 1,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          initialSlide: 2,
          simulateTouch: false,
          navigation: {
            nextEl: '.jury__button--next',
            prevEl: '.jury__button--prev',
          },
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