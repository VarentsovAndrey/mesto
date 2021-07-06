import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  addCardButton,
  editProfilePopup,
  popupProfileForm,
  popupCardForm,
  profileTitle,
  profileSubtitle,
  nameInput,
  jobInput,
  initialCards,
  config,
} from "../utils/constants.js";

editProfilePopup.addEventListener("click", () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
  popupProfile.open();
});

addCardButton.addEventListener("click", () => {
  popupAddCard.open();
});

const popupProfile = new PopupWithForm(".popup-profile", profileSubmitHandler);
popupProfile.setEventListeners();

const userInfo = new UserInfo({ name: profileTitle, job: profileSubtitle });

function profileSubmitHandler(data) {
  userInfo.setUserInfo(data);
  popupProfile.close();
}

const popupAddCard = new PopupWithForm(".popup-card", cardSubmitHandler);
popupAddCard.setEventListeners();
const popupPreview = new PopupWithImage(".popup-preview");
popupPreview.setEventListeners();

function handleCardClick(element) {
  popupPreview.open(element);
}

function renderCard(element) {
  const card = new Card(
    element,
    ".item_template",
    handleCardClick
  ).getElement();
  return card;
}

const profileFormValidator = new FormValidator(config, popupProfileForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, popupCardForm);
cardFormValidator.enableValidation();

const CardList = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      items.forEach((item) => {
        const cardElement = renderCard(item);
        CardList.addItem(cardElement);
      });
    },
  },
  ".elements"
);
CardList.renderItems();

function cardSubmitHandler(values) {
  CardList.addItem(renderCard(values));
}
