// Перекрасить перввую карточку

const card = document.querySelector('.card');
const changeCardColorBtn = document.querySelector('#change-color-card-btn');
const brownColor = '#330303';

changeCardColorBtn.addEventListener('click', () => {
  card.style.backgroundColor = brownColor;
});


// Перекрасить все карточки

const chCards = document.querySelectorAll('.card');
const changeCardColorsBtn = document.querySelector('#change-color-cards-btn');
const violetColor = '#8400ff';

changeCardColorsBtn.addEventListener('click', () => {
  chCards.forEach((card) => {
    card.style.backgroundColor = violetColor;
  });
});


// Сбросить цвета всех карточек

const resCards = document.querySelectorAll('.card');
const resetCardsColorBtn = document.querySelector('#reset-color-cards-btn');
const baseColor = '#f7f7fA';

resetCardsColorBtn.addEventListener('click', () => {
  resCards.forEach((card) => {
    card.style.backgroundColor = baseColor;
  });
});


// Открыть google

const openGoogleBtn = document.querySelector('#open-google-btn');

openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answerСonfirmation = confirm('Вы действительно хотите открыть google?')

  if (answerСonfirmation === true) {
    window.open('https://google.com')
  }
  else {
    return;
  }
};


// Вывод консоль лог

const logMessageBtn = document.querySelector('#log-message-btn');

logMessageBtn.addEventListener('click', () => {
  logMessage('Активирована кнопка вывода сообщения')
});

function logMessage(message) {
  alert('Сообщение в консоли');
  console.log(message);
}


//Вывод в консоль заголовка при наведении на него

const title = document.querySelector('.title');

title.addEventListener('mouseover', function () {
  console.log(title.textContent);
});


// Кнопка, меняющаа цвет

const colorButton = document.querySelector('.color-button');

colorButton.addEventListener('click', () => {
  colorButton.classList.toggle('color-button_changed');
});
