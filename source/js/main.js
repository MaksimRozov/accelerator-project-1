// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { sliderJuryInit } from './modules/sliders/slider-jury';
import { sliderReviewsInit } from './modules/sliders/slider-reviews';
import { tabsInit } from './modules/tabs';
import { accordionInit } from './modules/accordion';
import { validateForm } from './modules/form';
import { playVideo } from './modules/play-video';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    sliderJuryInit();
    sliderReviewsInit();
    tabsInit();
    accordionInit();
    validateForm();
    playVideo();
  });
});
