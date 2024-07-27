import { Swiper } from '../../../vendor/swiper/swiper.min.js';
import { Navigation } from '../../../vendor/swiper/modules';

const reviewsSlider = document.querySelector('.reviews__slider');

const sliderReviewsInit = () => {
  if (reviewsSlider) {
    // eslint-disable-next-line no-unused-vars
    const swiperReviews = new Swiper(reviewsSlider, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: false,
      speed: 1000,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 1,
        },

        768: {
          slidesPerView: 1,
          spaceBetween: 40,
          initialSlide: 1,
          simulateTouch: false,
        },

        1366: {
          slidesPerView: 1,
          spaceBetween: 40,
        }
      }
    });
  }
};


export { sliderReviewsInit };
