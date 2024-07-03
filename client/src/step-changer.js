const form = document.getElementById("multi-step-form");
const nextButtons = form.querySelectorAll(".next-btn");
const prevButtons = form.querySelectorAll(".prev-btn");
const formSteps = form.querySelectorAll(".form-step");
const stepIndicator = document.querySelectorAll(".step");
const stepBar = document.querySelector(".step-bar");
let currentStep = 0;
export function StepChanger() {
  nextButtons.forEach(forwardStep);
  prevButtons.forEach(backwardStep);
}

function forwardStep(button) {
  button.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      changeStep(1);
    }
  });
}
function backwardStep(button) {
  button.addEventListener("click", () => {
    changeStep(-1);
  });
}

function changeStep(step) {
  formSteps[currentStep].classList.remove("active");
  if (step > 0) {
    stepIndicator[currentStep].classList.add("completed");
  }
  currentStep += step;
  formSteps[currentStep].classList.add("active");
  stepIndicator[currentStep].classList.add("active");
  updateStepBar();
}

function updateStepBar() {
  const totalSteps = stepIndicator.length;
  const stepPercentage = (currentStep / (totalSteps - 1)) * 100;
  stepBar.style.width = `${stepPercentage}%`;
}
export function resetStep() {
  // reset step indicator and update form to step 1
  stepIndicator.forEach((step) => {
    step.classList.remove("active", "completed");
  });
  formSteps.forEach((step) => {
    step.classList.remove("active");
  });
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
  stepIndicator[currentStep].classList.add("active");
  stepBar.style.width = "0%";
}

function validateStep(step) {
  const inputs = formSteps[step].querySelectorAll(".floating-input");
  let valid = true;
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
    }
  });
  return valid;
}
