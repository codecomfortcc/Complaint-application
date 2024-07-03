import { showSuccessMessage } from "./success-message.js";
import { sheetsFetch } from "./sheets.js";
import  {validateData} from './validate-data.js';
import { DragAndDrop } from "./dropzone.js";
import { StepChanger,resetStep } from "./step-changer.js";
const form = document.getElementById('multi-step-form');
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formData =  await validateData();
    await sheetsFetch(formData);
    form.reset();
    resetStep();
    showSuccessMessage();
  } 
  catch (e) {
    return;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  DragAndDrop();
  StepChanger();
});
