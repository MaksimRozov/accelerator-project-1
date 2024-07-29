const videoContainerElement = document.querySelector('.about__video');
const playButtonElement = document.querySelector('.about__video-button');

const loadVideo = () => {
  videoContainerElement.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
};

const playVideo = () => {
  playButtonElement.addEventListener('click', () => {
    loadVideo();
  });
};

export { playVideo };
