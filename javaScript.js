const editButton = document.querySelector(".profile__editButton");
const overlay = document.querySelector(".overlay");
const popupClose = document.querySelector(".overlay__popupClose");

editButton.addEventListener("click", () => {
  overlay.classList.add("overlay__active");
});

popupClose.addEventListener("click", () => {
  overlay.classList.remove("overlay__active");
});

let formElement = overlay.querySelector(".overlay__popupForm");

function handleFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = overlay.querySelector(".overlay__formName").value;

  let jobInput = overlay.querySelector(".overlay__formDiscription").value;
  document.querySelector(".profile__title").textContent = nameInput;
  document.querySelector(".profile__subtitle").textContent = jobInput;
  overlay.classList.remove("overlay__active");
}

formElement.addEventListener("submit", handleFormSubmit);
