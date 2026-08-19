
import { comments } from "./comments.js"


// 1. создание массива чисел и фильтрация

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNunbers = numbers.filter(number => number >= 5)

console.log(newNunbers)


// 3. Создать массив строк, относящихся к любой сущности

const powerTools = ["Дрель", "Шуруповерт", "Перфоратор", "Болгарка", "Лобзик", "Сварочный аппарат"]

const findTool = powerTools.includes("Фрезер")

console.log(findTool)


// 4. Функция переворачивания массива

const reverseArray = array => {
  return ([...array].reverse())
}

const reversNum = reverseArray(numbers)
const reversTools = reverseArray(powerTools)


// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const commentsInCom = comments.filter(comment => comment.email.includes('.com'))

console.log(commentsInCom)


// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const editComments = comments.map(comment => {
  return {
    ...comment, postId: comment.id <= 5 ? 2 : 1
  }
})

console.log(editComments)


// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const idName = comments.map(comment => ({id: comment.id, name: comment.name}))

console.log(idName)


// 10. добавляем объектам свойство isInvalid

const newComments = comments.map(comment => ({...comment, isInvalid: comment.body.length > 180 ? true : false}))

console.log(newComments)


// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emails = comments.reduce((acc, comment) => {
  acc.push(comment.email)
  return acc
}, [])

console.log(emails)

const emails2 = comments.map(comment => comment.email)

console.log(emails2)


// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

console.log(emails.toString())
console.log(emails.join(' | '))

