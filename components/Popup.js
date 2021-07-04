// export function openModal(element) {
//   element.classList.add("popup-opened");
//   document.addEventListener("keydown", closePopupEsc);
// }
// export function closeModal(element) {
//   element.classList.remove("popup-opened");
//   document.removeEventListener("keydown", closePopupEsc);
// }

// export function closePopupEsc(evt) {
//   if (evt.key === "Escape") {
//     const popupIsOpen = document.querySelector(".popup-opened");
//     closeModal(popupIsOpen);
//   }
// }

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popup
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup-opened")) {
        this.close();
      }
    });
  }
}
