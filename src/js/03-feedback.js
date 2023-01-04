import throttle from 'lodash.throttle';
import localStorageService from './localstorage.js';

const formEl = document.querySelector('.feedback-form');

const fillFormElFields = () => {
  const userFeedbackInfo = localStorageService.load('feedback-form-state');

  if (userFeedbackInfo === undefined) {
    return;
  }

  for (const prop in userFeedbackInfo) {
    formEl.elements[prop].value = userFeedbackInfo[prop];
  }
};

fillFormElFields();

const onFormElInput = event => {
  const { target } = event;

  let userFeedback = localStorage.getItem('feedback-form-state');
  userFeedback = userFeedback ? JSON.parse(userFeedback) : {};

  const fieldName = target.name;
  const fieldValue = target.value;

  userFeedback[fieldName] = fieldValue;

  localStorageService.save('feedback-form-state', userFeedback);
};

const onFormElSubmit = event => {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  formEl.reset();
  localStorageService.remove('feedback-form-state');
};

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onFormElSubmit);
