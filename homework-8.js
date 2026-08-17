// 3. создать объект - персонаж

const person = {
  name: "Max",
  family_name: "Red",
  age: 18,
  email: "maxred@gmail.com",
  job: "museum",
  jobTitle: "cook",
  country: "USA",
  sity: "huston"
}


// 4. создать объект - машина. добавить пользователя

const carObject = {
  brand: "Toyota",
  model: "Camry",
  color: "grey",
  year: 2012,
  transmission: "manual"
}

carObject.owner = person


//5. функция добавления нового свойства в элемент carObject

const lookingSpeedMax = () => {
  const keysCar = Object.keys(carObject)
  keysCar.map((item, index) => {
    if (item === "speedMax") {
      return
    } else if (index === keysCar.length - 1) {
      carObject.speedMax = 260
    }
  })
}

lookingSpeedMax(carObject)


//6. функция, выводящая значения свойства элемента, принятое как аргумент

const logQuality = (object, quality) => {
  console.log(object[quality])
}

logQuality(person, "country")


//7. массив с продуктами

const rayTest = [
  "Хлеб",
  "Сливочное масло",
  "Сыр",
  "Молоко"
]


//8. массив с книгами

const books = [
  {
    name: "Аэлита",
    author: "А.Толстой",
    year: 1923,
    coverСolor: "коричневый",
    genre: "Научная фантастика"
  },
  {
    name: "Туарег",
    author: "А.Васкес-Фигероа",
    year: 1980,
    coverСolor: "синий",
    genre: "Приключенческий роман"
  },
  {
    name: "Посольский город",
    author: "Ч.Мьевиль",
    year: 2011,
    coverСolor: "зеленый",
    genre: "Научная фантастика"
  },
  {
    name: "Преступление и наказание",
    author: "Ф.Достоевский",
    year: 1866,
    coverСolor: "коричневый",
    genre: "Психологический роман"
  }
]

books.push({
  name: "Скотный двор",
  author: "Д.Оруэлл",
  year: 1945,
  coverСolor: "белый",
  genre: "Политическая аллегория"
})


//9. массив с книгами из одной вселенной

const AtlasShrugged = [
{
  name: "Атлант расправил плечи. Несуперечность",
  author: "А.Рэнд",
  year: 1957,
  coverСolor: "серый",
  genre: "Антиутопия"
},
{
  name: "Атлант расправил плечи. Несуперечность",
  author: "А.Рэнд",
  year: 1957,
  coverСolor: "серый",
  genre: "Антиутопия"
},
{
  name: "Атлант расправил плечи. А есть А",
  author: "А.Рэнд",
  year: 1957,
  coverСolor: "серый",
  genre: "Антиутопия"
}
]

const allBooks = [...books, ...AtlasShrugged]


//10. функция, добавляющая свойство в массив

const addQuality = () => {
  const updatedAllBooks = allBooks.map(book => ({
    ...book,
    isOld: book.year < 1976
  }))
  return(updatedAllBooks)
}

addQuality()

