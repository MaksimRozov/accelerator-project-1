const tabParent = document.querySelector('.faq__content');

const faqButtonElements = tabParent.querySelectorAll('.faq__button');
const faqTabContentElements = tabParent.querySelectorAll('.faq__accordion');

const tabsInit = () => {
  if (tabParent) {

    // Обработчик события клика для вкладок
    faqButtonElements.forEach((tabButton, index) => {
      tabButton.setAttribute('data-tab', index);
      tabButton.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTabId = e.target.getAttribute('data-tab');

        // Убираем активный класс у всех вкладок, кроме текущей
        faqButtonElements.forEach((item) => {
          if (tabButton !== item) {
            item.classList.remove('faq__button--active');
          }
        });

        // Добавляем активный класс текущей вкладке
        tabButton.classList.add('faq__button--active');

        // Показываем соответствующее содержимое вкладки
        faqTabContentElements.forEach((itemContent, indexContent) => {
          itemContent.setAttribute('data-tab-content', indexContent);

          const contentId = itemContent.getAttribute('data-tab-content');
          if (contentId === activeTabId) {
            itemContent.classList.add('faq__accordion--active');
          } else {
            itemContent.classList.remove('faq__accordion--active');
          }
        });
      });
    });
  }
};

export { tabsInit };
