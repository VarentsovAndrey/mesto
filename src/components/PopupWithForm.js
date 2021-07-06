import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this.form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const values = {};
    const inputList = Array.from(this.form.querySelectorAll(".popup__input"));
    inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }

  close() {
    this.form.reset();
    super.close();
  }
}
