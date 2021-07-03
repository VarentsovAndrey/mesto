export function openModal(element) {
  element.classList.add("popup-opened");
  document.addEventListener("keydown", closePopupEsc);
}
export function closeModal(element) {
  element.classList.remove("popup-opened");
  document.removeEventListener("keydown", closePopupEsc);
}

export function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupIsOpen = document.querySelector(".popup-opened");
    closeModal(popupIsOpen);
  }
}
