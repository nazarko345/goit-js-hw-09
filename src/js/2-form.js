const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-input');
const messageArea = document.querySelector('.message-textarea');

form.addEventListener('input', event => {
  formData.email = emailInput.value.trim();
  formData.message = messageArea.value.trim();
  const jsonFormData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', jsonFormData);
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
  localStorage.clear();
});

const existCheck = localStorage.getItem('feedback-form-state');

if (existCheck) {
  const parsedData = JSON.parse(existCheck);
  emailInput.value = parsedData.email || '';
  messageArea.value = parsedData.message || '';
} else {
  emailInput.value = '';
  messageArea.value = '';
}
