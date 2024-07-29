import { validatePhoneInput, validateNameInput, resetError } from './utils';
import { formContentElement, formElement, itemsInputElement, ErrorClass } from './variables';

const validateForm = () => {
  if (formContentElement) {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();

      itemsInputElement.forEach((input) => {
        if (input.name === 'name') {
          validateNameInput(input);
        } else if (input.name === 'telephone') {
          validatePhoneInput(input);
        }
      });

      const isValid = Array.from(itemsInputElement).every(
        (input) => !input.classList.contains(ErrorClass.ERROR_INPUT),
      );
      if (isValid) {
        formElement.submit();
      }
    });

    resetError();
  }
};

export { validateForm };
