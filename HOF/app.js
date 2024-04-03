// ejercicio 1

let mensaje = message => console.log(message);

// ejercicio 2

let result = (number1, number2) =>  number1 * number2;

// ejercicio 3

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createMultplication (number1, number2) {

    let result = number1 * number2;

    return result;

}

const array2 = array.map(number => createMultplication(number, 2));

// console.log(array2);

// ejercicio 4

const beersArray = beers.map(beer => beer);

function powerBeers(array) {
    const beersSorted = array.toSorted((a,b) => b.abv - a.abv).splice(0,10);
    return beersSorted;
}

//cuando lo revisé lo metí todo en una sola línea, pero lo había hecho como el de abajo, me parece mejor forma, porque declaro menos variables, pero la verdad no sé, lo dejo para que me den su opinión o explicación, gracias.

// ejercicio 5

function bitBeer (array) {
    const beersSorted = array.toSorted((a,b) => a.ibu - b.ibu);
    const lessBitterBeers = beersSorted.splice(0, 10);
    return lessBitterBeers;
}

// ejercicio 6 

function findBeer(array, name) {
    let index = array.findIndex(beer => beer.name == name);
    return array[index];
}

// ejercicio 7

function findIbu(array, ibu) {
    let beer = array.find(element => element.ibu == ibu)
    return beer == undefined ? `There is no beer with an ibu of ${ibu}` : beer
}

// function findIbu(array, ibu) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].ibu == ibu){
//             return array[i];
//         }
//     }
//     return `There is no beer with an ibu of ${ibu}`
// }

// ejercicio 8

function beerPosition(array, beerName) {
    let index = array.findIndex(beer => beer.name == beerName);
    
    if (index == -1) {
        return `${beerName} does not exist`;
    } else {
        return index + 1;
    }
}

// ejercicio 9

function alcohol(array, abv) {

    let objeto;
    const beers = array.filter(beer => beer.abv < abv).map(beer => objeto = {
        name : beer.name,
        ibu : beer.ibu,
        abv : beer.abv
    })
    return beers
    // const beers = array.filter(beer => beer.abv < abv)
    // const nuevasBirras = [];
    // for (const beer of birras) {
    //     nuevasBirras.push(birra = {
    //         name: beer.name,
    //         ibu: beer.ibu,
    //         abv: beer.abv
    //     })    
    // }
    // return birras;
}

// ejercicio 10

function orderBeers(array, property, order){
    
    let beersSorted;

    if (order){
        beersSorted = array.toSorted((a,b) => a[property] - b[property]).splice(0, 10);
    } else {
        beersSorted = array.toSorted((a,b) => b[property] - a[property]).splice(0,10);
    }

    // const beers = beersSorted.splice(0, 10);
    return beersSorted;
}

// ejercicio 11


function createRow(array) {
    
    let table = document.getElementById('tbody');
    let template = document.createElement('template')
    array.forEach(beer => {
        template.innerHTML += `<tr>
        <td class ="p-2 border-solid border border-black">${beer.name}</td>
        <td class ="p-2 border-solid border border-black">${beer.abv}</td>
        <td class ="p-2 border-solid border border-black">${beer.ibu}</td>
        </tr>`;
    });

    table.innerHTML = template.innerHTML
    return table

//me parece que está mal aunque funcione

    //     for (let i = 0; i < array.length; i++) {
//         table.innerHTML += `<tr>
//             <td class ="p-2 border-solid border border-black">${array[i].name}</td>
//             <td class ="p-2 border-solid border border-black">${array[i].abv}</td>
//             <td class ="p-2 border-solid border border-black">${array[i].ibu}</td>
//         </tr>`;
//     }
}

createRow(beersArray);