const editProfilePopup = document.querySelector(".profile__editor");
const popupProfile = document.querySelector(".popup-profile");
const popupProfileClose = document.querySelector(".popup-profile__close");

function openModal(element) {
  element.classList.add("popup-opened");
  document.addEventListener("keydown", closePopupEsc);
}
function closeModal(element) {
  element.classList.remove("popup-opened");
  document.removeEventListener("keydown", closePopupEsc);
}
editProfilePopup.addEventListener("click", () => {
  openModal(popupProfile);
});
popupProfileClose.addEventListener("click", () => {
  closeModal(popupProfile);
});

const formElement = document.querySelector(".popup-profile__form");

const nameInput = document.querySelector(".popup-profile__form_name");

const jobInput = document.querySelector(".popup-profile__form_discription");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closeModal(popupProfile);
}

formElement.addEventListener("submit", handleFormSubmit);

const addCardButton = document.querySelector(".profile__add");
const popupCard = document.querySelector(".popup-card");
const popupCardClose = document.querySelector(".popup-card__close");

addCardButton.addEventListener("click", () => {
  openModal(popupCard);
});

popupCardClose.addEventListener("click", () => {
  closeModal(popupCard);
});

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

const itemTemplate = document.querySelector(".item_template").content;
const elements = document.querySelector(".elements");

const addCards = document.querySelector(".popup-card__submit");

const formText = document.querySelector(".popup-card__form_name");
const formLink = document.querySelector(".popup-card__form_discription");

const popupPreview = document.querySelector(".popup-preview");
const popupPreviewClose = document.querySelector(".popup-preview__close");

const popupPreviewTitle = document.querySelector(".popup__picture-title");
const popupPreviewImg = document.querySelector(".popup__picture-image");

popupPreviewClose.addEventListener("click", () => {
  closeModal(popupPreview);
});

function render() {
  initialCards.forEach(function (element) {
    const card = createCard(element);
    cardAddElement(card);
  });
}

function createCard(element) {
  const htmlElement = itemTemplate.cloneNode(true);
  htmlElement.querySelector(".elements__title").textContent = element.name;

  const elementItem = htmlElement.querySelector(".elements__item");

  elementItem.src = element.link;
  elementItem.alt = "Новая карточка";

  htmlElement
    .querySelector(".elements__delete")
    .addEventListener("click", handleDelete);
  htmlElement
    .querySelector(".elements__button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__button_active", true);
    });

  htmlElement
    .querySelector(".elements__item")
    .addEventListener("click", handlePopup);

  function handlePopup(evt) {
    openModal(popupPreview);
    popupPreviewTitle.textContent = element.name;
    popupPreviewImg.src = element.link;
  }
  function handleDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }

  return htmlElement;
}

const cardAddElement = function (element) {
  elements.prepend(element);
};

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: formText.value,
    link: formLink.value,
  };

  cardAddElement(createCard(newCard));
  closeModal(popupCard);
}

addCards.addEventListener("click", handleAddCard);

render();

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup-opened")) {
      closeModal(evt.target);
    }
  });
});

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupIsOpen = document.querySelector(".popup-opened");
    closeModal(popupIsOpen);
  }
}
