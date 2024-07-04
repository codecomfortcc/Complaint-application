import { showToast } from "./showToast.js";
import { sheetsFetch } from "./sheets.js";
import { validateData } from "./validate-data.js";
import { handleFiles } from "./handle-files.js";
import { StepChanger, resetStep } from "./step-changer.js";
const form = document.getElementById("multi-step-form");
const button = document.getElementById("submitbtn");
const loader = document.getElementById("loading-container");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  button.disabled = true;
  loader.style.display = "flex";
  try {
    const formData = await validateData();
    const response = await sheetsFetch(formData);
    if (response) {
      showToast("Data submitted successfully", "success");
    }
  } catch (e) {
    showToast(e, "error");
    return;
  } finally {
    loader.style.display = "none";
    button.disabled = false;
    form.reset();
    resetStep();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file");
  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropzone.classList.add("dragover");
  });
  dropzone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropzone.classList.remove("dragover");
  });
  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropzone.classList.remove("dragover");
    const files = event.dataTransfer.files;
    handleFiles(files);
  });
  dropzone.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    fileInput.click();
  });
  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleFiles(files);
  });

  StepChanger();
});
