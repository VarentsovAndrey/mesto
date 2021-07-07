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

const userInfo = new UserInfo({ profileTitle, profileSubtitle });

editProfilePopup.addEventListener("click", () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
  popupProfile.open();
});

const profileSubmitHandler = function ({ name, about }) {
  userInfo.setUserInfo({ name, about });
  popupProfile.close();
};

addCardButton.addEventListener("click", () => {
  popupAddCard.open();
});

const popupProfile = new PopupWithForm(".popup-profile", profileSubmitHandler);
popupProfile.setEventListeners();

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
