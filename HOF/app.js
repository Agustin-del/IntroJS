// ejercicio 1

let mensaje = message => console.log(message)

// ejercicio 2

let result = (number1, number2) =>  number1 * number2

// ejercicio 3

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function createMultplication (number1, number2) {

    let result = number1 * number2

    return result

}

const array2 = array.map(e => createMultplication(e, 3))

console.log(array2)

// ejercicio 4

const arrayBeers = []

beers.map(beer => arrayBeers.push(beer))

function powerBeers(arrayBeers) {
    const beersSorted = arrayBeers.toSorted((a,b) => b.abv - a.abv)
    const powerBeers = beersSorted.slice(0, 10)
    return powerBeers
}

// ejercicio 5

function bitBeer (arrayBeers) {
    const beersSorted = arrayBeers.toSorted((a,b) => a.ibu - b.ibu)
    const lessBitterBeers = beersSorted.slice(0, 10)
    return lessBitterBeers
}

// ejercicio 6 

function findBeer(array, name) {
    let index = array.findIndex(a => a.name == name)
    return array[index]
}

// ejercicio 7

function findIbu(array, ibu) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].ibu == ibu){
            return array[i]
        }
    }
    return `There is no beer with an ibu of ${ibu}`
}

// ejercicio 8

function beerPosition(array, beerName) {
    let index = array.findIndex(beer => beer.name == beerName)
    if (index == -1) {
        return `${beerName} does not exist`
    } else {
        return index + 1
    }
}

// ejercicio 9

function alcohol(array, abv) {
    
    const birras = array.filter(beer => beer.abv < abv)
    const nuevasBirras = []
    
    for (const beer of birras) {
        nuevasBirras.push(birra = {
            name: beer.name,
            ibu: beer.ibu,
            abv: beer.abv
        })    
    }
    return nuevasBirras
}

// ejercicio 10

function orderBeers(array, property, order){
    
    let beersSorted

    if (order){
        beersSorted = array.toSorted((a,b) => a[property] - b[property])
    } else {
        beersSorted = array.toSorted((a,b) => b[property] - a[property])
    }

    const beers = beersSorted.slice(0, 10)
    return beers
}

// ejercicio 11

let table = document.getElementById('tbody') 

function createRow(array) {
    for (let i = 0; i < array.length; i++) {
        table.innerHTML += `<tr>
            <td class ="p-2 border-solid border border-black">${array[i].name}</td>
            <td class ="p-2 border-solid border border-black">${array[i].abv}</td>
            <td class ="p-2 border-solid border border-black">${array[i].ibu}</td>
        </tr>`
    }
}

console.log(createRow(arrayBeers))