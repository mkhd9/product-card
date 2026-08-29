//3,5. рендерить принятое от пользователя количество карточек

import { cards } from './products.js'

const cardTemplate = document.querySelector('.card-template')
const compoundTemplate = document.querySelector('.compound-template')
const products = document.querySelector('.products')


const getCardsCount = () => {
  const count = Number(prompt('Сколько карточек отобразить? От 1 до 5'))

  if (count >= 1 && count <= 5) {
    return count
  }

  alert('Введите число от 1 до 5')
  return null
}


const renderCards = cards => {
  cards.forEach(card => {
    const cardClone = cardTemplate.content.cloneNode(true)

    const image = cardClone.querySelector('.card__images')
    image.src = card.imgUrl
    image.alt = card.imgAlt

    cardClone.querySelector('.card__category').textContent = card.cardCategory
    cardClone.querySelector('.card__name').textContent = card.cardName
    cardClone.querySelector('.card__description').textContent = card.cardDescription

    const compoundList = cardClone.querySelector('.compound__list')

    card.compoundList.forEach(compound => {
      const compoundClone = compoundTemplate.content.cloneNode(true)

      compoundClone.querySelector('.compound__item').textContent = compound

      compoundList.appendChild(compoundClone)
    })

    cardClone.querySelector('.card__price-label').textContent = card.priceLabel
    cardClone.querySelector('.card__price-value').textContent = card.priceValue

    products.appendChild(cardClone)
  })
}


const cardsCount = getCardsCount()

if (cardsCount !== null) {
  renderCards(cards.slice(0, cardsCount))
}

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const arrayProducts = cards.reduce((acc, card) => {
  acc.push({
    [card.cardName]: card.cardDescription
  })
  return acc
}, [])
