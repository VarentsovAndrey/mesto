let editButton = document.querySelector(".profile__editor");
let overlay = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");

editButton.addEventListener("click", () => {
  overlay.classList.add("popup_opened");
});

popupClose.addEventListener("click", () => {
  overlay.classList.remove("popup_opened");
});

let formElement = document.querySelector(".popup__form");

function handleFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector(".popup__form_name");

  let jobInput = document.querySelector(".popup__form_discription");

  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__subtitle").textContent = jobInput.value;

  overlay.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleFormSubmit);

let addButton = document.querySelector(".profile__add");
let overlayII = document.querySelector(".popupII");
let popupIIClose = document.querySelector(".popupII__close");

addButton.addEventListener("click", () => {
  overlayII.classList.add("popupII_opened");
});

popupIIClose.addEventListener("click", () => {
  overlayII.classList.remove("popupII_opened");
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

const addCards = document.querySelector(".popupII__submit");

const formText = document.querySelector(".popupII__form_name");
const formLink = document.querySelector(".popupII__form_discription");

function render() {
  initialCards.forEach(renderItem);
}

function renderItem(element) {
  const htmlElement = itemTemplate.cloneNode(true);
  htmlElement.querySelector(".elements__title").textContent = element.name;

  htmlElement.querySelector(".elements__item").src = element.link;

  htmlElement
    .querySelector(".elements__button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__button_active", true);
    });
  elements.appendChild(htmlElement);
}

render();

function adding(evt) {
  evt.preventDefault();
  const newCard = itemTemplate.cloneNode(true);
  newCard.querySelector(".elements__title").textContent = formText.value;
  console.log(newCard);
  newCard.querySelector(".elements__item").src = formLink.value;
  elements.prepend(newCard);
  overlayII.classList.remove("popupII_opened");
}

addCards.addEventListener("click", adding);
