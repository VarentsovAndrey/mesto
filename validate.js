const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => !formInput.validity.valid);
};

const toggleButtonState = (inputList, buttonPopup) => {
  if (hasInvalidInput(inputList)) {
    buttonPopup.classList.add("popup__button_disabled");
    buttonPopup.setAttribute("disabled", true);
  } else {
    buttonPopup.classList.remove("popup__button_disabled");
    buttonPopup.removeAttribute("disabled");
  }
};

const showInputError = (formPopup, formInput, errorMessage) => {
  const formError = formPopup.querySelector(`#${formInput.id}-error`);
  formInput.classList.add("popup__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("popup__error_active");
};

const hideInputError = (formPopup, formInput) => {
  const formError = formPopup.querySelector(`#${formInput.id}-error`);
  formInput.classList.remove("popup__input_type_error");
  formError.textContent = "";
  formError.classList.remove("popup_error_active");
};

const checkInput = (formPopup, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formPopup, formInput, formInput.validationMessage);
  } else {
    hideInputError(formPopup, formInput);
  }
};

const setEventListeners = (formPopup) => {
  const inputList = Array.from(formPopup.querySelectorAll(".popup__input"));
  const buttonPopup = formPopup.querySelector(".popup__button");
  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      checkInput(formPopup, formInput);
      toggleButtonState(inputList, buttonPopup);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formPopup) => {
    formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formPopup);
  });
};

enableValidation();
