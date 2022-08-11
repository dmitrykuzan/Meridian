"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck } from "./functions/mobile-check";
// import { burger } from "./functions/burger";

// Components
// import { formValidation } from "./components/formValidation";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  // burger();
  // formValidation();
});
