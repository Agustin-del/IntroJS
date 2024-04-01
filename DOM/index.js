// ejercicio 1

let titulo = document.getElementById('titulo');

// ejercicio 2

let tituloPrincipal = 'Frutas';

titulo.innerHTML = tituloPrincipal;

// ejercicio 3

let hf = document.getElementsByClassName('hf');

for (const element of hf) {
    element.style.backgroundColor= 'orange';
}

// ejercicio 4

let p = document.getElementsByTagName('p');
p[0].innerHTML = 'Edmundo Agustín Rúveda Cohort n°54';

// ejercicio 5

let div = document.createElement('div');

div.id ='contenedor';
document.body.children[1].append(div);
// document.body.children[1].children[1].id = 'contenedor';

let contenedor = document.getElementById('contenedor');

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

let lista = document.createElement('div');
lista.id = 'lista';

document.body.children[1].appendChild(lista);

let tituloLista = document.createElement('h2');
lista.appendChild(tituloLista);

tituloLista.innerHTML = 'Frutas Dulces';

// ejercicio 10 y 11
let ul = document.createElement('ul');
lista.append(ul);

function createItems(object) {
    for (const fruit of fruits) {
        if (fruit.esDulce) {
            let item = document.createElement('li');
            ul.appendChild(item);
            item.innerHTML = fruit.nombre;
        }
    }
}

createItems(fruits);

//se me ocurrió esta otra forma y me gustó más, pero luego me di cuenta que el ejercicio es más específico, perdón por dejar tantos comentarios, pero la verdad me re costó este sprint je...

// for (const fruit of fruits) {
//     if (fruit.esDulce) {
//         ul.innerHTML += `<li>${fruit.nombre}</li>`;
//     }
// }