export const addCardButton = document.querySelector(".profile__add");
export const editProfilePopup = document.querySelector(".profile__editor");
export const popupProfileForm = document.querySelector(".popup-profile__form");
export const popupCardForm = document.querySelector(".popup-card__form");
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const nameInput = document.querySelector(".popup-profile__form_name");
export const jobInput = document.querySelector(
  ".popup-profile__form_discription"
);

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  formSelector: ".popup__form",
  formInput: ".popup__input",
  buttonPopup: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  formInputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active",
};
