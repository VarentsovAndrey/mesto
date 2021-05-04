export class FormValidator {
  constructor(config, formPopup) {
    this._config = config;
    this._formPopup = formPopup;
    this._buttonElement = this._formPopup.querySelector(
      this._config.buttonPopup
    );

    this._inputList = Array.from(
      this._formPopup.querySelectorAll(this._config.formInput)
    );
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
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonPopup.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }
  _setEventListeners() {
    this._inputList.forEach((formInput) => {
      formInput.addEventListener("input", () => {
        this._checkInput(formInput);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  disableSubmitButton() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disbaled = true;
  }

  enableValidation() {
    this._setEventListeners();
  }
}
