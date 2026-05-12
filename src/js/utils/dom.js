export const DOMElements = {
  get ratingSection() {
    return document.querySelector(".rating-form");
  },

  get thankYouSection() {
    return document.querySelector(".thank-you");
  },

  get form() {
    return this.ratingSection?.querySelector("form");
  },

  get selectedRatingText() {
    return this.thankYouSection?.querySelector("#selected-rating");
  },

  get ratingInputs() {
    return this.form?.querySelectorAll(".rating-input");
  },

  get submitButton() {
    return this.form?.querySelector("button[type='submit']");
  },
};

function assertElement(element, context) {
  const isEmptyNodeList = element instanceof NodeList && element.length === 0;
  if (!element || isEmptyNodeList) {
    throw new Error(`Expected element for ${context}, but got ${element}`);
  }
}

export function addSafeListener(element, event, handler) {
  assertElement(element, `addSafeListener for event ${event}`);
  element.addEventListener(event, handler);
}

export function initDOMElements() {
  Object.entries(DOMElements).forEach(([key, element]) => {
    assertElement(element, `DOMElements.${key}`);
  });
}
