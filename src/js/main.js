import "@styles/main.css";

import { initEventListeners } from "./events.js";
import { initDOMElements } from "./utils/dom.js";

/* ============== Initialization ============== */

document.addEventListener("DOMContentLoaded", () => {
    initDOMElements();
    initEventListeners();
});