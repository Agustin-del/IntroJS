// ejercicios "low": 
// n°1
    
let myFirstName = "Edmundo"
console.log(myFirstName)
 
// n°2

let myLastName = "Rúveda"

// n°3

let myAge = 32

// n°4

let myPet = "Lolo"

// n°5

let petAge = 2

// n°6

let fullName = myFirstName + " " + myLastName

// n°7

let presentationText = `Me llamo ${myFirstName} ${myLastName} tengo ${myAge} mi mascota se llama ${myPet} tiene ${petAge} años y mi nombre completo es ${fullName}`

// ejercicios "medium"

// n°1

let sumAges = myAge + petAge

let substractAges = myAge - petAge

let productAges = myAge * petAge

let divisionAges = myAge / petAge

// n°2

let student = {
    firstName:"Edmundo",
    secondName:"Agustín",
    lastName:"Rúveda",
    age:32,
    favoriteColor: "Purple",
}

console.table(student)

console.log(student.firstName)
console.log(student.secondName)
console.log(student.lastName)
console.log(student.age)
console.log(student.favoriteColor)

// n°3

let pet = {
name:"Lolo",
age:2,
color:"Orange",
species:"Cat",
favoriteThing:"Eat",
}

console.table(pet)

console.log(pet.name)
console.log(pet.age)
console.log(pet.color)
console.log(pet.species)
console.log(pet.favoriteThing)

// n°4

let fruits = ["Apple", "Grapes", "Orange", "Tangerine", "Watermelon"]

console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

// ejercicios "high"

// n°1

let iAmAdult = prompt('How old are you? ') >= 18
console.log('I am an adult', iAmAdult)

// n°2

let numbers = [1, 2, 3, 4, 5]

console.log(numbers)

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

// n°3

let family = [{madre:"Gabriela"}, {hijoMayor:"Agustín"}, {hijaMenor:"Martina"}, {hijaMedio:"Malena"}, {hijoMedio:"Fernando"}, {padre:"Oscar"}]

console.log(family)

console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])

// n°4

let randomText = fruits[1] + numbers[3] + family[4].hijoMedio

console.log(randomText)