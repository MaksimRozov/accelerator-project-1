import { validatePhoneInput, validateNameInput, resetError } from './utils';
import { formContentElement, form, itemsInputElement, ErrorClass } from './variables';

const validateForm = () => {
  if (formContentElement) {
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
        (input) => !input.classList.contains(ErrorClass.ERROR_INPUT),
      );
      if (isValid) {
        form.submit();
      }
    });

    resetError();
  }
};

export { validateForm };
