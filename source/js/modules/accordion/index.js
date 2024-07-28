const accordionParent = document.querySelectorAll('.accordion');
const ActiveClass = {
  ACCORDION_ACTIVE: 'accordion__item--active'
};

const accordionInit = () => {
  accordionParent.forEach((parent, indexParent) => {
    parent.setAttribute('id', `accordion-${indexParent + 1}`);
    const parentId = parent.getAttribute('id');
    const parentById = document.querySelector(`#${parentId}`);

    if (parentById) {

      const accordionItemsElements = parentById.querySelectorAll('.accordion__item');

      accordionItemsElements.forEach((item, index) => {

        const headerButton = item.querySelector('.accordion__button');
        const content = item.querySelector('.accordion__content');

        if (parentId === 'accordion-1' && index === 0) {
          item.classList.add(ActiveClass.ACCORDION_ACTIVE);
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
        headerButton.addEventListener('click', () => {
          if (!item.classList.contains(ActiveClass.ACCORDION_ACTIVE)) {
            item.classList.add(ActiveClass.ACCORDION_ACTIVE);
            content.style.maxHeight = `${content.scrollHeight}px`;
          } else {
            item.classList.remove(ActiveClass.ACCORDION_ACTIVE);
            content.style.maxHeight = '0';
          }
        });
      });
    }
  });
};

export { accordionInit };
