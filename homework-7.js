// 3.

function reportsTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`)
}

reportsTemperature('Мекке', '40')


// 4.

const SPEED_LIGHT = 299792458

function speedometry(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость')
  } else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость')
  } else {
    console.log('Скорость света')
  }
}

speedometry(100000)


// 5.

let product = 'Фонарь';
let productPrice = 1000

const buy = budget => {
  if (budget > productPrice) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {                                                              // Сделал как тз
    let shortfall = productPrice - budget;
    console.log(`Вам не хватает ${shortfall}$, пополните баланс`)
  }
}

buy(1000)


// 6

function calculatesVolume(length, width, height) {
  let volume = length * width * height
  console.log('объем параллелепипеда:', volume)
}

calculatesVolume(5, 7, 3)


// 7

const PI = 3.14

let company = 'HP'

let counterReadings = 334636