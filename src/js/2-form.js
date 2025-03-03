const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const existCheck = localStorage.getItem(STORAGE_KEY);
if (existCheck) {
  Object.assign(formData, JSON.parse(existCheck));
}

form.email.value = formData.email || '';
form.message.value = formData.message || '';

form.addEventListener('input', event => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value.trim();
    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, jsonFormData);
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';
});
