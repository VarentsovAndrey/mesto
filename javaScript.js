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
