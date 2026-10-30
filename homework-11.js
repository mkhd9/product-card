const openModalBtn = document.querySelector('#open-modal-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.modal__close-btn');

const subscribeForm = document.querySelector('.subscribe-form');
const registrationForm = document.querySelector('.registration-form');

const passwordInput = document.querySelector('#password');
const repeatPasswordInput = document.querySelector('#repeat-password');

let user;


// часть 1. футер

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});


// часть 2. модальное окно
//Открытие модального окна

openModalBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
  overlay.classList.add('overlay-showed');
});

// Закрытие по крестику

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});

// Часть 3. Форма регистрации

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Проверяем правильность заполнения всех полей

  if (!registrationForm.checkValidity()) {
    alert('Регистрация отклонена. Проверьте правильность заполнения полей.');
    registrationForm.reportValidity();
    return;
  }

  // Проверяем совпадение паролей

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert('Регистрация отклонена. Пароли не совпадают!');
    return;
  }

  // Получаем данные формы

  const formData = new FormData(registrationForm);
  const data = Object.fromEntries(formData.entries());

  // Создаём объект пользователя

  user = {
    ...data,
    createdOn: new Date()
  };

  console.log(user);

  alert('Регистрация успешно завершена!');

  // Очищаем форму

  registrationForm.reset();

  // Закрываем модальное окно

  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});