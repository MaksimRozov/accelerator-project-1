// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { sliderJuryInit } from './modules/sliders/slider-jury';
import { sliderReviewsInit } from './modules/sliders/slider-reviews';
import { tabsInit } from './modules/tabs';
import { accordionInit } from './modules/accordion';

// // Функция для загрузки iframe с видео
// function loadVideo() {
//   const videoContainer = document.querySelector('.about__image');
//   videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=9TZXsZItgdw" frameborder="0" allowfullscreen></iframe>';
// }

// // Добавляем обработчик события на кнопку "Play Video"
// document.querySelector('.about__video-button').addEventListener('click', () => {
//   loadVideo(); // Вызываем функцию загрузки видео
// });


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    sliderJuryInit();
    sliderReviewsInit();
    tabsInit();
    accordionInit();
  });
});
