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
  if (emailInput.value === '' || messageArea === '') {
    alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.clear();
  form.reset();
});
