import { KEYCODE_ESC } from "../utils/constants";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      this.close();
    }
  }
  setEventListeners() {
    this._popup
      .querySelector(".popup__btn_action_close")
      .addEventListener("click", () => {
        this.close();
      });
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_active")) {
        this.close();
      }
    });
  }
}
