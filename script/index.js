import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openModal, closeModal } from "./Popup.js";

const formElement = document.querySelector(".popup-profile__form");
const popupCard = document.querySelector(".popup-card");
const popupProfile = document.querySelector(".popup-profile");
const popupPreview = document.querySelector(".popup-preview");
const elements = document.querySelector(".elements");
const addCards = document.querySelector(".popup-card__submit");
const formText = document.querySelector(".popup-card__form_name");
const formLink = document.querySelector(".popup-card__form_discription");
const addCardButton = document.querySelector(".profile__add");
const popupCardClose = document.querySelector(".popup-card__close");
const popupPreviewClose = document.querySelector(".popup-preview__close");
const popups = document.querySelectorAll(".popup");
const popupProfileClose = document.querySelector(".popup-profile__close");
const editProfilePopup = document.querySelector(".profile__editor");
const popupProfileForm = document.querySelector(".popup-profile__form");
const popupCardForm = document.querySelector(".popup-card__form");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup-profile__form_name");
const jobInput = document.querySelector(".popup-profile__form_discription");

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const config = {
  formSelector: ".popup__form",
  formInput: ".popup__input",
  buttonPopup: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  formInputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active",
};

formElement.addEventListener("submit", handleFormSubmit);
editProfilePopup.addEventListener("click", () => {
  openModal(popupProfile);
});

popupProfileClose.addEventListener("click", () => {
  closeModal(popupProfile);
});

const disabledButton = (button) => {
  button.classList.add("popup__button_disabled");

  button.setAttribute("disabled", true);
};

const handleCardAddElement = function (element) {
  elements.prepend(element);
};

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: formText.value,
    link: formLink.value,
  };

  renderCard(newCard);
  closeModal(popupCard);
}

addCards.addEventListener("click", handleAddCard);

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closeModal(popupProfile);
}

addCardButton.addEventListener("click", () => {
  openModal(popupCard);
  cardFormValidator.disableSubmitButton();
});

popupCardClose.addEventListener("click", () => {
  closeModal(popupCard);
});

popupPreviewClose.addEventListener("click", () => {
  closeModal(popupPreview);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup-opened")) {
      closeModal(evt.target);
    }
  });
});

initialCards.forEach((element) => {
  renderCard(element);
  handleCardAddElement(renderCard(element));
});

function renderCard(element) {
  const card = new Card(element).getElement();
  return card;
}

const profileFormValidator = new FormValidator(config, popupProfileForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, popupCardForm);
cardFormValidator.enableValidation();
