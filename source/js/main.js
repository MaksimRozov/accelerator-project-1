// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { sliderJuryInit } from './modules/sliders/slider-jury';
import { sliderReviewsInit } from './modules/sliders/slider-reviews';
import { tabsInit } from './modules/tabs';
import { accordionInit } from './modules/accordion';

// Функция для загрузки iframe с видео
function loadVideo() {
  const videoContainer = document.querySelector('.about__video');
  videoContainer.innerHTML = '<iframe width="360" height="230" src="https://www.youtube.com/embed/9TZXsZItgdw?si=MO3SEu-LfrbBN-_P" loading="lazy"  frameborder="0" allowfullscreen></iframe>';
}

// Добавляем обработчик события на кнопку "Play Video"
document.querySelector('.about__video-button').addEventListener('click', () => {
  loadVideo(); // Вызываем функцию загрузки видео
});


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    sliderJuryInit();
    sliderReviewsInit();
    tabsInit();
    accordionInit();
  });
});
