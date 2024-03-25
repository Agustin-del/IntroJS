// ejercicios "low"

// n° 1

/* let number = prompt('Enter a number between 1 and 100: ')
if (number < 1 || number > 100) {
    console.log('Read well, please')
} else {
    for(let i = number; i >= 0; i--) {
        console.log(i)
    }
} */

// n° 2

/* let number = prompt('Enter a number between 1 and 10: ')

if (number < 1 || number > 10) {
    console.log('Read well, please')
} else {
    for(let i = 1; i <= 10; i++) {
        console.log(`${i}x${number}=${number * i}`)
    }
} */

// n° 3 
/* 
let number = parseInt(prompt('Enter a number: '))

let sum = 0
while (number !== 0) {
    sum += number
    number = parseInt(prompt('Enter a number: '))
}
 */
// console.log(sum)

// n° 4 

/* let sum = 0
let number

do {
    number = parseInt(prompt('Enter a number: '))
    sum += number
} while (number !== 0)

console.log(sum) */

// n° 5

/* let person = {
    firstName : 'Edmundo', 
    secondName : 'Agustín',
    lastName : 'Rúveda',
    origin : 'Argentina',
    studies : 'Música'
}
 *//*
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(key)
    }
} */

// n° 6

/* for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(person[key])
    }
} */

// ejercicios "medium"

// n° 1
/* 
let secretNumber = sum
let counter = 0
let guess

do {
    guess = parseInt(prompt('Guess a number: '))
    counter += 1
    
    if (guess < secretNumber) {
        alert('The number entered is smaller than the secret')
    } else if (guess > secretNumber) {
        alert('The number entered is bigger than the secret')
    } else {
        alert(`You got it right! The secret number was ${guess} and you made ${counter} attempts`)
    }
} while(guess !== secretNumber)
 */

// n° 2

/* let number = parseInt(prompt('Enter a number: '))

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i)
    }
} */

// n° 3 // No sé como sacarle la coma del final
/* function RingBell() {
    return("Ding Dong,");
}

result = ''
times = Number(prompt('Enter a number: '))

for (let i = 0; i < times; i++) {
    result += RingBell()
}

console.log(result)
 */
// n° 4

/* const dateLimit = '1997-8-3'
const dates = ['1984-18-2', '1998-3-2', '1973-15-7', '2024-31-10', '2081-1- 9']

for (const date of dates) {
    if (date >= dateLimit) {
        console.log(date)
    }
}
 */

// n° 5 y n° 6

/* let colors = ['Red', 'Green', 'Blue', 'Violet', 'Brown', 'Black', 'White']

function colorIterator(array) {
    for (const color of array) {
        console.log(color)
    }
}

colorIterator(colors)*/

// n° 7

/* let numbers = [5, 7, 1, 3, 50]

for (const number of numbers) {
    console.log(`The number is ${number} and its double is ${number * 2}`)
} */

// n° 8 

/* let persons = [{
    name : 'Juan',
    lastName : 'Pérez',
    age: 38,
    member : 'father',
}, 
{
    name : 'Marta',
    lastName : 'Gómez',
    age : 37,
    member : 'mother', 
},
{
    name : 'Julia',
    lastName : 'Pérez',
    age : 20,
    member : 'daughter', 
},
{
    name : 'Juan Manuel',
    lastName : 'Pérez',
    age : 16,
    member : 'son', 
}]

for (const person of persons) { 
    console.log(`Hello, I am ${person.name} ${person.lastName}(${person.member}) and I am ${person.age} years old.`)

}
 */

// ejercicios "high"

// n° 1

/* let odds = 0
let evens = 0
let number

do {
    number = parseInt(prompt('Enter a number: '))
    if (number % 2 === 0){
        evens += number
    } else {
        odds += number
    }
} while (number !== 0)

console.log (`Even numbers: ${evens}`)
console.log(`Odd numbers ${odds}`)
 */
// n° 2

// let array = [33, 1, 200, 52, 4, 120, 6, 7, 8, 10]
// let temp = array[0]

// for (number of array) {
//     if (temp < number) {
//         temp = number
//     } 
// }

// console.log ('The bigger one is', temp)
