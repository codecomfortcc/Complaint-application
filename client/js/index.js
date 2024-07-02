import { showSuccessMessage } from "../success-message.js";
import { sheetsFetch } from "../sheets.js";
import  {validateData} from '../validate-data.js';
const form = document.getElementById("form-page");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {

    const formData =  await validateData();
    await sheetsFetch(formData);
    // form.reset();
    // showSuccessMessage();
  } catch (e) {
    alert(e);
    return;
  }
});
