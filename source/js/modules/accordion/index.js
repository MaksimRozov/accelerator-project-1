const accordionItemsElements = document.querySelectorAll('.accordion__item');

const accordionInit = () => {
  accordionItemsElements.forEach((item, index) => {
    const headerButton = item.querySelector('.accordion__button');
    const content = item.querySelector('.accordion__content');
    if (index === 0) {
      item.classList.add('accordion__item--active');
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
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
