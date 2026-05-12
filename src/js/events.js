import { addSafeListener, DOMElements } from "./utils/dom";
import { show, hide } from "./ui";

/* ============== Helpers ============== */

function getSelectedRating(inputs){
    const checkedInput = Array.from(inputs).find(input => input.checked);
    return checkedInput ? checkedInput.value : null;
}

function updateSubmitButtonState() {
    const hasSelection = Array.from(DOMElements.ratingInputs).some(input => input.checked);

    DOMElements.submitButton.disabled = !hasSelection;
}


async function handleRatingSubmit(event) {

    event.preventDefault();

    const selectedRating = getSelectedRating(DOMElements.ratingInputs);

    if (!selectedRating) {
        return;
    }

    DOMElements.selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;

    await hide(DOMElements.ratingSection);
    show(DOMElements.thankYouSection);  
    DOMElements.thankYouSection.focus();
}

/* ============== Initialization ============== */

export function initEventListeners(){

    DOMElements.ratingInputs.forEach(input => {
        addSafeListener(input, "change", updateSubmitButtonState);
    });

    addSafeListener(DOMElements.form, "submit", handleRatingSubmit);    
}
