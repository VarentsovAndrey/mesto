import { openModal } from "./Popup.js";

const itemTemplate = document.querySelector(".item_template").content;
const popupPreview = document.querySelector(".popup-preview");
const popupPreviewTitle = document.querySelector(".popup__picture-title");
const popupPreviewImg = document.querySelector(".popup__picture-image");

export class Card {
  constructor(element) {
    this.element = element;
  }

  _makeTemplateElement() {
    const _htmlElement = itemTemplate
      .querySelector(".elements__element")
      .cloneNode(true);

    return _htmlElement;
  }

  _makeElement() {
    this._htmlElement = this._makeTemplateElement();
    this.elementLike = this._htmlElement.querySelector(".elements__button");
    this.elementPreview = this._htmlElement.querySelector(".elements__item");
    this._makeEventListeners();

    this._htmlElement.querySelector(
      ".elements__title"
    ).textContent = this.element.name;

    const elementItem = this._htmlElement.querySelector(".elements__item");
    elementItem.src = this.element.link;
    elementItem.alt = "Новая карточка";

    return this._htmlElement;
  }

  _makeEventListeners() {
    const elementDelete = this._htmlElement.querySelector(".elements__delete");
    const elementLike = this._htmlElement.querySelector(".elements__button");
    const elementPreview = this._htmlElement.querySelector(".elements__item");

    elementDelete.addEventListener("click", () => this._remove());
    elementLike.addEventListener("click", () => this._like());
    elementPreview.addEventListener("click", () => this._preview());
  }

  _like() {
    this.elementLike.classList.toggle("elements__button_active");
  }

  _remove() {
    this._htmlElement.remove();
  }

  _preview() {
    openModal(popupPreview);

    popupPreviewTitle.textContent = this.element.name;
    popupPreviewImg.src = this.element.link;
  }

  getElement() {
    return this._makeElement();
  }
}
