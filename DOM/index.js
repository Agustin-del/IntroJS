// ejercicio 1

let titulo = document.getElementById('titulo')

// ejercicio 2

let tituloPrincipal = 'Frutas'

titulo.innerHTML = tituloPrincipal

// ejercicio 3

let hf = document.getElementsByClassName('hf')

for (const element of hf) {
    element.style.backgroundColor= 'orange'
}

// ejercicio 4

let p = document.getElementsByTagName('p')

p[0].innerHTML = 'Edmundo Agustín Rúveda Cohort n°54'

// ejercicio 5

let div = document.createElement('div')

document.body.children[1].append(div)
document.body.children[1].children[1].id = 'contenedor'

let contenedor = document.getElementById('contenedor')

// ejercicio 6 

function createCard (objeto) {
    return `<img src="${objeto.foto}" alt="">
        <div class ="textContainer">
        <h2>${objeto.nombre}</h2>
        <p>${objeto.descripcion}</p>
        </div>`
}

// ejercicio 7

const fruits = []

for (const fruta of frutas) {
    fruits.push(fruta)    
}

let fragmento = new DocumentFragment()

// for (const fruta of fruits) {
//     fragmento.textContent += createCard(fruta)
// }    

// contenedor.innerHTML = fragmento.textContent


//así fue como salió y funciona, arriba, hay que poner el div de vuelta, abajo es como nos mostró Martín, sólo habría que sacar el div del string que devuelve la función, no sé bien que hice en ninguno de los dos, como que no me cae la ficha.

for (const fruta of fruits) {
    let aux = document.createElement('div')
    aux.innerHTML = createCard(fruta)
    aux.className = 'card'
    fragmento.appendChild(aux)
}

// ejercicio 8

contenedor.appendChild(fragmento)

// ejercicio 9

let lista = document.createElement('div')
lista.id = 'lista'

document.body.children[1].appendChild(lista)

let tituloLista = document.createElement('h2')
lista.appendChild(tituloLista)

tituloLista.innerHTML = 'Frutas Dulces'

// ejercicio 10 y 11
let ul = document.createElement('ul')
lista.append(ul)

for (const fruta of fruits) {
    if (fruta.esDulce) {
        let item = document.createElement('li')
        ul.appendChild(item)
        item.innerHTML = fruta.nombre
    }
}
