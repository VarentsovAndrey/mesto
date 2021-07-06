import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPreviewImg = this._popup.querySelector(".popup__picture-image");
    this._popupPreviewTitle = this._popup.querySelector(
      ".popup__picture-title"
    );
  }
  open(element) {
    this._popupPreviewTitle.textContent = element.name;
    this._popupPreviewImg.src = element.link;
    super.open();
  }
}
