/* // ejercicios "low"

// n° 1 

let num1 = 4
let num2 = 5

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// n° 2

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else {
    console.log('The numbers are equal')
}

// n° 3

if (num1 === num2 ){ //me pareció hacer que sean números
    console.log('The numbers are equal')
} else {
    console.log('The numbers are different')
} */

// n° 4

/* let date1 = '2018-9-2'
let date2 = '2023-7-5'

if (date1 > date2) {
    console.log(`The date ${date1} is greater than ${date2}`)
} else if (date2 > date1) {
    console.log(`The date ${date2} is greater than ${date1}`)
} else {
    console.log('The dates are the same')
}
 */
// n° 5

/* let date1 = '2023-9-2'
let date2 = '2023-9-5'

if (date1 > date2) {
    console.log(`The date ${date1} is greater than ${date2}`)
} else if (date2 > date1) {
    console.log(`The date ${date2} is greater than ${date1}`)
} else {
    console.log('The dates are the same')
}
 */
/* let date1 = '2018-9-2'
let date2 = '2018-9-2'

if (date1 > date2) {
    console.log(`The date ${date1} is greater than ${date2}`)
} else if (date2 > date1) {
    console.log(`The date ${date2} is greater than ${date1}`)
} else {
    console.log('The dates are the same')
} */

// n° 6

/* let number1 = 5
let number2 = 7
let number3 = 9

if (number1 > number2) {
    if (number1 > number3){
        console.log('The number 1 is the largest')
    } else {
        console.log('The number 3 is the largest')
    }
} else {
    if (number2 > number3){
        console.log('The number 2 is the largest')
    } else {
        console.log('The number 3 is the largest')
    }
}
 */

// ejercicios "medium"

// n° 1

/* let color = prompt('If you have to choose between red, blue and green, which one is your favorite?').trim().toLowerCase()

switch (color) {
    case 'red':
        console.log('The color of passion')
        break
    case 'green':
        console.log('The color of nature')
        break
    case 'blue':
        console.log('The color of the sea')
        break
    default:
        console.log("mmm...")
        break;
} */

// n° 2
/* 
let number1 = parseFloat(prompt('Please enter an integer between 1 and 100: ').trim())
let number2 = parseFloat(prompt('Please enter another integer between 1 and 100: ').trim())

if (number1 < 1 || number1 > 100 || number2 < 1 || number2 > 100) {
    console.log('Wrong number my friend')
} else {
    let operation = prompt('Now please enter an operation to do between those two numbers(addition, substraction, multiplication or division): ').trim().toLowerCase()
    
    switch (operation) {
        case 'addition':
            console.log(`the sum of ${number1} and ${number2} is ${number1 + number2}`)
            break
        case 'substraction':
            console.log(`the substraction of ${number1} and ${number2} is ${number1 + number2}`)
            break
        case 'multiplication':
            console.log(`the multiplication of ${number1} and ${number2} is ${number1 + number2}`)
            break
        case 'division':
            console.log(`the division of ${number1} and ${number2} is ${number1 + number2}`)
            break
        default:
            console.log("I don't understand what you want, sorry, please read well.")
            break
    }
} */


// n° 3

/* let people1 = {
    name:'Juan',
    age:39,
    height:1.69,
}
let people2 = {
    name:'Rosa',
    age:39,
    height:1.60,
}

let taller
let shorter
let equalHeight
if (people1.height > people2.height) {
    taller = people1.name
    shorter = people2.name
} else if (people1.height < people2.height){
    taller = people2.name
    shorter = people1.name
} else {
    equalHeight = 1
}

let older
let younger
let equalAge
if (people1.age > people2.age) {
    older = people1.name
    younger = people2.name
} else if (people1.age < people2.age){
    older = people2.name
    younger = people1.name
} else {
    equalAge = 1
}


if (equalHeight == 1 && equalAge == undefined) {
    console.log(`They have the same height and the older one is ${older}`)
} else if (equalAge === 1 && equalHeight === undefined) {
    console.log(`They have the same age and the higher one is ${taller}`)
} else if (equalAge === 1 && equalHeight === 1) {
    console.log ('They have the same age and the same height')
} else if (taller === older) {
    console.log(`${taller} is taller and older than ${shorter}`)
} else {
    console.log(`${taller} is taller than ${shorter} and ${older} is older than ${younger}`)
} */

// n° 4

/* let name = prompt('Please introduce your name: ')
let age = prompt('Please introduce your age: ')
let height = prompt('Please introduce your height (in meters): ')
let vision = prompt('Please introduce your vision')

if (age >= 18 && height > 1.10 && vision >= 8 && vision <= 10) {
    console.log('You are qualified to drive')
}
 */
// n°5

/* let age = prompt('Enter your age: ')

if (age >= 0 && age <= 12) {
    alert('infant')
} else if (age >= 13 && age <= 18) {
    alert ('adolescent')
} else if (age >= 19 && age <= 45) {
    alert ('older young')
} else if (age > 45 && age <= 100) {
    alert ('elderly')
} else {
    alert ('Is he really that old?')
}
 */

// n° 6

/* let times = prompt('Please enter a number between 1 and 3: ')
let number = prompt('Please enter any other number: ')

switch (times) {
    case '1':
        alert(`The number entered is ${number}`)
        break
    case '2':
        alert(`Twice the number entered is ${number * 2}`)
        break
    case '3':
        alert(`Three times the number enter is ${number * 3}`)
        break
    default:
        alert('I said a number between 1 and 3')
        break
}
 */
// ejercicio "high"

// n°1

  
let customerName = prompt('Please enter your name: ').trim().toLowerCase()

if (customerName === 'edmundo') {
    console.log('Welcome tocayo')
} else {
    if (confirm('Do you have a pass?')) {
        let pass = prompt('Enter your pass: ').toLowerCase().trim()
        if (pass === 'vip') {
            console.log('Welcome Sir')
        } else if (pass === 'normal'){
            if (confirm('Do you want to come in?')) {
                console.log('Welcome Sir')
            } else {
                console.log("Well, good bye, I don't know what to tell you")
            }
        } 
    } else { 
        if (confirm('Do you want to buy?')) {
            let money = parseInt(prompt('How much money do you have?'))
            if (money >= 1000) {
                console.log('Succesfull sale, welcome my friend')
            } else {
                console.log('Rejected sale, good bye')
            }
        } else {
            console.log('Good bye friend, come back soon')
        }
    }
}
