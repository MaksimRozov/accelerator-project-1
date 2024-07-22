const lettersOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const digitsOnlyRegex = /^\d+$/;

const showError = (input, errorMessage) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');

  // parent.classList.add('form__input--error');
  input.classList.add('form__input--error');

  errorText.textContent = errorMessage;
  errorText.style.display = 'block';
};

const hideError = (input) => {

  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');

  // parent.classList.remove('form__input--error');
  input.classList.remove('form__input--error');

  errorText.textContent = '';
  errorText.style.display = 'none';
};


const validatePhone = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showError(input, 'Поле обязательно для заполнения');
  } else if (!digitsOnlyRegex.test(value)) {
    showError(input, 'Поле должно содержать только цифры');
  } else {
    hideError(input);
  }
};


const validateName = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showError(input, 'Поле обязательно для заполнения');
  } else if (!lettersOnlyRegex.test(value)) {
    showError(input, 'Поле может содержать только буквы и пробелы');
  } else {
    hideError(input);
  }
};

const validateForm = () => {
  const formContentElement = document.querySelector('.form__content');
  if (formContentElement) {
    const form = formContentElement.querySelector('form');
    const itemsInputElement = form.querySelectorAll('input');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      itemsInputElement.forEach((input) => {
        if (input.name === 'name') {
          validateName(input);
        } else if (input.name === 'telephone') {
          validatePhone(input);
        }
      });

      const isValid = Array.from(itemsInputElement).every(
        (input) => !input.classList.contains('form__input--error'),
      );
      if (isValid) {
        form.submit();
      }
    });


    // itemsInputElement.forEach((input) => {
    //   input.addEventListener('blur', () => {
    //     if (input.value.trim() === '') {
    //       // input.parentElement.classList.remove('form__input--error');
    //       input.classList.remove('form__input--error');
    //     }
    //   });

    //   input.addEventListener('input', () => {
    //     if (input.value.trim() === '') {
    //       // input.parentElement.classList.remove('form__input--error');
    //       input.classList.remove('form__input--error');
    //     }
    //   });
    // });
  }
};

export { validateForm };
