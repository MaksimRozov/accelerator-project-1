const formContentElement = document.querySelector('.form__content');
const form = formContentElement.querySelector('form');
const itemsInputElement = form.querySelectorAll('input');
const lettersOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const digitsOnlyRegex = /^\d+$/;

const ErrorMassage = {
  FIELD_REQUIRED: 'Поле обязательно для заполнения',
  FIELD_TEXT: 'Поле может содержать только буквы и пробелы',
  FIELD_DIGITS: 'Поле должно содержать только цифры'
};

const ErrorClass = {
  ERROR_INPUT: 'form__input--error'
};

export { itemsInputElement, lettersOnlyRegex, digitsOnlyRegex, ErrorMassage, ErrorClass, form, formContentElement };
