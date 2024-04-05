//Es todo lo que está comentado, lo otro son cosas que fui probando.

// ejercicio 1

let titulo = document.getElementById('titulo');

// ejercicio 2

let tituloPrincipal = 'Frutas';
titulo.textContent = tituloPrincipal;

// ejercicio 3

// let hf = document.getElementsByClassName('hf');

for (const element of document.getElementsByClassName('hf')) {
    element.style.backgroundColor= 'orange';
}

// ejercicio 4

// let p = document.getElementsByTagName('p');
document.getElementsByTagName('p')[0].textContent = 'Edmundo Agustín Rúveda Cohort n°54';

// ejercicio 5

let div = document.createElement('div');
div.id ='contenedor';

document.body.children[1].append(div);
// document.body.children[1].children[1].id = 'contenedor';


// ejercicio 6 

function createCard (objeto) {
    return `<img src="${objeto.foto}" alt="${objeto.nombre}">
        <div class ="textContainer">
        <h2>${objeto.nombre}</h2>
        <p>${objeto.descripcion}</p>
        </div>`;
}

// ejercicio 7

// const fruits = [];

// for (const fruta of frutas) {
//     fruits.push(fruta);
// }

const fruits = frutas.map((fruta => fruta));

// for (const fruta of fruits) {
//     fragmento.textContent += createCard(fruta);
// }    

// contenedor.innerHTML = fragmento.textContent;


//así fue como salió y funciona, arriba, hay que poner el div de vuelta, abajo es como nos mostró Martín, sólo habría que sacar el div del string que devuelve la función, no sé bien que hice en ninguno de los dos, como que no me cae la ficha.

function displayCards(object) {
    
    let fragmento = new DocumentFragment();

    for (const fruit of fruits) {
        let aux = document.createElement('div');
        aux.innerHTML = createCard(fruit);
        aux.className = 'card';
        fragmento.appendChild(aux);
    }
    contenedor.appendChild(fragmento);
}

// ejercicio 8

displayCards(fruits);

// ejercicio 9

let contenedorLista = document.createElement('div');
contenedorLista.id = 'lista';

document.body.children[1].appendChild(contenedorLista);

let tituloLista = document.createElement('h2');
contenedorLista.appendChild(tituloLista);
tituloLista.textContent = 'Frutas Dulces';
// let textNode = document.createTextNode('Frutas dulces')

// tituloLista.appendChild(textNode)

// ejercicio 10 y 11

let ul = document.createElement('ul');
contenedorLista.appendChild(ul);

function createItems(object, contenedor) {
    let fragment = new DocumentFragment();
    for (const fruit of fruits) {
        if (fruit.esDulce) {
            let aux = document.createElement('li')
            aux.innerHTML = fruit.nombre;
            fragment.appendChild(aux);
            contenedor.appendChild(fragment);
        }
    }
    
    
}

createItems(fruits, ul);

//se me ocurrió esta otra forma y me gustó más, pero luego me di cuenta que el ejercicio es más específico, perdón por dejar tantos comentarios, pero la verdad me re costó este sprint je...

// for (const fruit of fruits) {
//     if (fruit.esDulce) {
//         ul.innerHTML += `<li>${fruit.nombre}</li>`;
//     }
// }