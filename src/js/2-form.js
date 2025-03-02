const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-input');
const messageArea = document.querySelector('.message-textarea');

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, jsonFormData);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value === '' || messageArea.value === '') {
    alert('Fill please all fields');
    return;
  }
  form.reset();
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
});

const existCheck = localStorage.getItem('feedback-form-state');

if (existCheck) {
  const parsedData = JSON.parse(existCheck);
  emailInput.value = parsedData.email || '';
  messageArea.value = parsedData.message || '';
}
