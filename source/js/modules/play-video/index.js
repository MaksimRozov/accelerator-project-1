const loadVideo = () => {
  const videoContainer = document.querySelector('.about__video');
  videoContainer.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
};

const playVideo = () => {
  document.querySelector('.about__video-button').addEventListener('click', () => {
    loadVideo();
  });
};


export { playVideo };
