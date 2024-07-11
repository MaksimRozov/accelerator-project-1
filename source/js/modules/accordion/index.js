const accordionItems = document.querySelectorAll('.accordion__item');

const accordionInit = () => {

  accordionItems.forEach((item) => {
    const headerButton = item.querySelector('.accordion__button');
    const content = item.querySelector('.accordion__content');

    headerButton.addEventListener('click', () => {

      if (!item.classList.contains('accordion__item--active')) {
        item.classList.add('accordion__item--active');
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        item.classList.remove('accordion__item--active');
        content.style.maxHeight = '0';
      }
    });
  });
};

export { accordionInit };
