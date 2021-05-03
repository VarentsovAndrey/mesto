export class FormValidator {
  constructor(config, formPopup) {
    this._config = config;
    this._formPopup = formPopup;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((formInput) => !formInput.validity.valid);
  }

  _showInputError(formInput, errorMessage) {
    const formError = this._formPopup.querySelector(`#${formInput.id}-error`);
    formInput.classList.add(this._config.formInputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  }

  _hideInputError(formInput) {
    const formError = this._formPopup.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove(this._config.formInputErrorClass);
    formError.textContent = "";
    formError.classList.remove(this._config.errorClass);
  }

  _checkInput(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  }

  _toggleButtonState(inputList, buttonPopup) {
    if (this._hasInvalidInput(inputList)) {
      buttonPopup.classList.add(this._config.inactiveButtonClass);
      buttonPopup.setAttribute("disabled", true);
    } else {
      buttonPopup.classList.remove(this._config.inactiveButtonClass);
      buttonPopup.removeAttribute("disabled");
    }
  }
  _setEventListeners() {
    const inputList = Array.from(
      this._formPopup.querySelectorAll(this._config.formInput)
    );

    const buttonPopup = this._formPopup.querySelector(this._config.buttonPopup);

    inputList.forEach((formInput) => {
      formInput.addEventListener("input", () => {
        this._checkInput(formInput);
        this._toggleButtonState(inputList, buttonPopup);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
