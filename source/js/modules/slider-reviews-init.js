import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const reviewsSlider = document.querySelector('.reviews-slider');

const sliderReviewsInit = () => {
  if (reviewsSlider) {
    // eslint-disable-next-line no-unused-vars
    const swiperReviews = new Swiper(reviewsSlider, {
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
          slidesPerView: 1,
          spaceBetween: 40,
          initialSlide: 1,
          simulateTouch: false,
          navigation: {
            nextEl: '.reviews__button--next',
            prevEl: '.reviews__button--prev',
          },
        },

        1366: {
          slidesPerView: 1,
          spaceBetween: 40,
        }
      },

    });
  }
};


export { sliderReviewsInit };
