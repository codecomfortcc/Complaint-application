// script.js
export function showToast(message, type = 'default') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
      toast.classList.add('show');
  }, 100);

  setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
          toastContainer.removeChild(toast);
      }, 500);
  }, 3000);
}
