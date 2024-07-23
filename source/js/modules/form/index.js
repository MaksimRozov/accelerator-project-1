const lettersOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const digitsOnlyRegex = /^\d+$/;

const showErrorMessage = (input, errorMessage) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');
  input.classList.add('form__input--error');
  errorText.textContent = errorMessage;
  errorText.style.display = 'block';
};

const hideErrorMessage = (input) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');
  input.classList.remove('form__input--error');
  errorText.textContent = '';
  errorText.style.display = 'none';
};

const validatePhoneInput = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showErrorMessage(input, 'Поле обязательно для заполнения');
  } else if (!digitsOnlyRegex.test(value)) {
    showErrorMessage(input, 'Поле должно содержать только цифры');
  } else {
    hideErrorMessage(input);
  }
};

const validateNameInput = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showErrorMessage(input, 'Поле обязательно для заполнения');
  } else if (!lettersOnlyRegex.test(value)) {
    showErrorMessage(input, 'Поле может содержать только буквы и пробелы');
  } else {
    hideErrorMessage(input);
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
          validateNameInput(input);
        } else if (input.name === 'telephone') {
          validatePhoneInput(input);
        }
      });

      const isValid = Array.from(itemsInputElement).every(
        (input) => !input.classList.contains('form__input--error'),
      );
      if (isValid) {
        form.submit();
      }
    });

    itemsInputElement.forEach((input) => {
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          hideErrorMessage(input);
          input.classList.remove('form__input--error');
        }
      });
      input.addEventListener('input', () => {
        hideErrorMessage(input);
        input.classList.remove('form__input--error');
      });
    });

  }
};

export { validateForm };
