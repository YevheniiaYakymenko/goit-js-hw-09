const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const msgTextarea = document.querySelector('textarea[name="message"]');

form.addEventListener('input', event => {
  if (event.target === emailInput || event.target === msgTextarea) {
    formData[event.target.name] = event.target.value.trim();
    saveFormData();
  }
});

const saveFormData = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFormData = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const savedFormData = JSON.parse(saveData);
    emailInput.value = savedFormData.email;
    msgTextarea.value = savedFormData.message;
    Object.assign(formData, savedFormData);
  }
};
loadFormData();

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    Object.assign(formData, { email: '', message: '' });
    form.reset();
  }
});
