import { handleFiles } from "./handle-files.js";

function stopPropagation(event) { 
  event.preventDefault();
  event.stopPropagation();
}


function onDragOver(event) {
  stopPropagation(event);
  dropzone.classList.add("dragover");
}

function onDragLeave(event) {
  stopPropagation(event);
    dropzone.classList.remove("dragover");
  }
function onDragDrop(event) {
  stopPropagation(event);
  dropzone.classList.remove("dragover");
  const files = event.dataTransfer.files;
  handleFiles(files);
}
function onClick(event) {
  const fileInput = document.getElementById("file");
  stopPropagation(event);
  fileInput.click();
}
function onChange() {

  const files = fileInput.files;
  handleFiles(files);
}
export function DragAndDrop() {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file");
  dropzone.addEventListener("dragover", onDragOver);
  dropzone.addEventListener("dragleave",onDragLeave );
  dropzone.addEventListener("drop", onDragDrop);
  dropzone.addEventListener("click", onClick);
  fileInput.addEventListener("change", onChange);
}


