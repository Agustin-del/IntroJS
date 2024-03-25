// ejercicios "low"

// n° 1

/* function add() {
    console.log(100 * 20)
} */

// n°2

// add()

// n°3

/* function add (num1, num2) {
    console.log(num1 * num2)
}
 */
// n°4

/* let number1 = 100
let number2 = 20 */

// n°5

/* function add (num1, num2) {
    let result = num1 * num2
    return result
}
 */

// n° 6
/* 
const add = function(num1, num2) {
    return (num1 * num2)
}

add(number1, number2) */

// ejercicios "medium"

// n° 1 

/* function greet(name) {
    console.log('Hello', name)
}

greet('Edmundo') */

// n° 2

/* const multiplication = function(num1, num2) {
    return num1 * num2
}

console.log(multiplication(5, 3)) 
console.log(multiplication(4, 6)) */

// n° 3

/* function area(base, height) {
    return base * height / 2
}
 */

// n° 4

/* function perimeter(side1, side2, side3) {
    return side1 + side2 + side3
}
 */

// n° 5

/* function totalPrice(quantity, price) {
    totalPrice = quantity * price
    if (quantity >= 10 && quantity < 20) {
        return totalPrice -= totalPrice * 0.1
    } else if (quantity >= 20) {
        return totalPrice -= totalPrice * 0.2
    }
    else {
        return totalPrice
    }
}
 */

// n° 6

/* function isAnAdult(age) {
    if (age >= 18) {
        return 'You are an adult'
    } else if (age >= 0 && age < 18) { 
        return 'You are not an adult'
    } else {
        return 'Sorry folk, bad age'
    }
}
 */

// ejercicios "high"

// n° 1

/* 
function taxMeter(income) { 
    if (income >= 0 && income <= 10000) {
        return income * 0.1
    } else {
        if (income > 10000 && income <= 20000) {
            return income * 0.15
        } else {
            return income * 0.2
        }
    }
}
 */

// n° 2
// no recuerdo bien pero creo que la otra forma que Martín me dijo es hacer un if numberDay == 1 || etc
// function weekDays(numberDay) {
//     switch (numberDay) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             return 'It is a bussiness day'
//             break
//         case 6:
//         case 7:
//             return "It's the weekend"
//             break
//         default: 
//             return 'What?'
//     }
// }    

// n°3
/* 
function personalInformation(name, lastName, age) {
    let user = {name:name, lastName:lastName, age:age}
    console.log(user)
}

let name = prompt('Enter your name: ').trim()
if (name === '') {
    console.error('The name cannot be empty')
}
let lastName = prompt('Enter your last name: ').trim()
if (lastName === '') {
    console.error('The last name cannot be empty')
} 
let age = parseInt(prompt('Enter your age: '))
if (age === '') {
    console.error('The age cannot be empty')
}

personalInformation(name, lastName, age) 
 */
// n°4

// let name = prompt('Enter your name: ').trim()
// function greet(name) {
//     return `Hello, my name is ${name}`
// }

// let birthYear = parseInt(prompt('Enter your birth year: '))
// let currentYear = parseInt(prompt('Enter the current year: '))
// function calculateAge(birthYear, currentYear) {
//     return currentYear - birthYear
// }

// function present(greet, age) {
//     alert(`${greet} and my age is ${age}`)   
// }

// present(greet(name), calculateAge(birthYear, currentYear))