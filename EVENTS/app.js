/* ir descomentando los appends, fui sacandolos para seguir con los ejercicios
 */
// ejercicio 1

let buttonChange = document.createElement('button');
let body = document.querySelector('body');
let square = document.createElement('div');

// body.appendChild(square);

square.className =  "h-[200px] w-[200px] bg-gray-500";

// body.appendChild(buttonChange);
buttonChange.className = "border border-black p-4 bg-yellow-400";
buttonChange.innerText = 'Change';


function changeColor(box, color){
    // box.classList.remove('bg-gray-500');
    box.className =`${color} h-[200px] w-[200px] bg-gray-500`;
}

let counter = 0;

buttonChange.addEventListener('click', event => {
    
    if (counter == 0) {
        changeColor(square, 'bg-blue-400');
    } else if (counter == 1) {
        changeColor(square, 'bg-red-500');
    } else {
        counter = -1;
        changeColor(square, 'bg-gray-500');
    }
    counter++;
});

// ejercicio 2 

let buttonReset = document.createElement('button');
let textInput = document.createElement('input');

// body.appendChild(textInput);
// body.appendChild(buttonReset);

textInput.className = "border border-black p-2";
buttonReset.className = "border border-black p-4 bg-yellow-400";
buttonReset.innerText = 'Reset';

textInput.addEventListener('change', event => {
    square.innerText = event.target.value;
});

buttonReset.addEventListener('click', event => {
    square.innerText = "";
});

// ejercicio 3

// let heightDiv = document.createElement('div');
// let weightDiv = document.createElement('div');

// let tituloHeight = document.createElement('h2');
// tituloHeight.innerText = 'Estatura';
// heightDiv.appendChild(tituloHeight);
// body.appendChild(heightDiv);

// let pHeight = document.createElement('p');
// pHeight.innerText = 'en centímetros';
// tituloHeight.appendChild(pHeight);

// let inputHeight = document.createElement('input');
// heightDiv.appendChild(inputHeight);
// inputHeight.className = "border border-black p-2";

// let tituloWeight = document.createElement('h2');
// tituloWeight.innerText = 'Peso';
// weightDiv.appendChild(tituloWeight);
// body.appendChild(weightDiv);

// let pWeight = document.createElement('p');
// pWeight.innerText = 'en kilogramos';
// tituloWeight.appendChild(pWeight);

// let inputWeight = document.createElement('input');
// weightDiv.appendChild(inputWeight);
// inputWeight.className = "border border-black p-2";

// let height;
// inputHeight.addEventListener('keyup', event => {
//     height = event.target.value;
// });

// let weight;
// inputWeight.addEventListener('keyup', event => {
//     weight = event.target.value;
// });

// let calculateButton = document.createElement('button');
// calculateButton.className = "border border-black p-4 bg-yellow-400 h-[40px] flex items-center";
// calculateButton.innerText = 'Calcular';
// body.appendChild(calculateButton);

// calculateButton.addEventListener('click', event => {
//     let resultDiv = document.createElement('div');
//     resultDiv.className = 'flex flex-col gap-2 items-center'
//     let tituloResult = document.createElement('h2');
//     let pResult = document.createElement('p');
//     let divResult = document.createElement('div');
//     divResult.className = 'border border-black p-2 w-[200px] h-[50px]';
    
//     body.appendChild(resultDiv);
//     resultDiv.appendChild(tituloResult);
//     resultDiv.appendChild(pResult);
//     resultDiv.appendChild(divResult);
    
//     tituloResult.innerText = 'Resultado';
//     pResult.innerText = 'Su índice de masa corporal es';
    
//     divResult.innerText = weight / (height ** 2);
// });

// ejercicio 4

// let divContainer = document.createElement('div');
// divContainer.className = 'flex flex-col gap-5 bg-gray-200 p-4 rounded-md';
// divContainer.innerHTML = `<h2 class = "text-xl">Monto moneda local</h2>
// <p class = "text-sm">sin comas sin puntos</p>
// <label>
// <input id = "input" class = "p-2 w-[200px] h-[27px] border border-black rounded-md" type="text">
// </label>
// <h2 class = "text-xl">Monto en dólares</h2>
// <p class = "text-sm">sin comas sin puntos</p>
// <div id ="output" class = "p-2 bg-white w-[200px] h-[27px] border border-black rounded-md flex items-center"></div>
// <button id = "convert"></button>`;

// body.appendChild(divContainer);

// let input = document.getElementById('input');
// let montoPeso;

// input.addEventListener('keyup', event => {
//     montoPeso = event.target.value;
// });
 
// let boton = document.getElementById('convert');
// boton.textContent = 'Convertir';
// boton.className = 'rounded-md border border-black p-4 bg-yellow-400 h-[40px] flex justify-center items-center';

// let output = document.getElementById('output');

// boton.addEventListener('click', event => {
//     output.innerText = montoPeso * 500;
// });

// ejercicio 4 b

let divContainer = document.createElement('div');
divContainer.className = 'flex flex-col gap-5 bg-gray-200 p-4 rounded-md';
divContainer.innerHTML = `<h2 class = "text-xl">Moneda Local</h2>
<p class = "text-sm">sin comas sin puntos</p>
<label>
<input id = "input" class = "p-2 w-[200px] h-[27px] border border-black rounded-md" type="text">
</label>
<h2 class = "text-xl">Dólares</h2>
<p class = "text-sm">sin comas sin puntos</p>
<div id ="output" class = "p-2 bg-white w-[200px] h-[27px] border border-black rounded-md flex items-center"></div>
<div class ="flex gap-4">
    <button id = "convertir">Convertir</button>
    <button id = "borrar">Borrar</button>
</div>`;

let div2Container = document.createElement('div');
div2Container.className = 'flex flex-col gap-5 bg-gray-200 p-4 rounded-md';

div2Container.innerHTML = `<h2 class = "text-xl">Dólares</h2>
<p class = "text-sm">sin comas sin puntos</p>
<label>
<input id = "input2" class = "p-2 w-[200px] h-[27px] border border-black rounded-md" type="text">
</label>
<h2 class = "text-xl">Moneda Local</h2>
<p class = "text-sm">sin comas sin puntos</p>
<div id ="output2" class = "p-2 bg-white w-[200px] h-[27px] border border-black rounded-md flex items-center"></div>
<div class = "flex gap-4">
    <button id= "convertir2">Convertir</button>
    <button id = "borrar2">Borrar</button>
</div>`;

body.appendChild(divContainer);
body.appendChild(div2Container);

let botonConvertir1 = document.getElementById('convertir');
let botonBorrar1 = document.getElementById('borrar');
let botonConvertir2 = document.getElementById('convertir2');
let botonBorrar2 = document.getElementById('borrar2');

botonConvertir1.className = 'w-[100px] rounded-md border border-black p-4 bg-yellow-400 h-[40px] flex justify-center items-center';

botonBorrar1.className = 'w-[100px] rounded-md border border-black p-4 bg-yellow-400 h-[40px] flex justify-center items-center';

botonConvertir2.className = 'w-[100px] rounded-md border border-black p-4 bg-yellow-400 h-[40px] flex justify-center items-center';

botonBorrar2.className = 'w-[100px] rounded-md border border-black p-4 bg-yellow-400 h-[40px] flex justify-center items-center';

//Conversión div1

let input = document.getElementById('input');
let monedaLocal;

input.addEventListener('keyup', event => monedaLocal = event.target.value);

botonConvertir1.addEventListener('click', () => output.innerText = monedaLocal * 500);

botonBorrar1.addEventListener('click', () => {
    input.value = ""
    output.innerText = ""
})

// conversion div2

let input2 = document.getElementById('input2');
let dolares;

input2.addEventListener('keyup', event => dolares = event.target.value);

botonConvertir2.addEventListener('click', () => output2.innerText = dolares / 500);

botonBorrar2.addEventListener('click', () => {
    input2.value = ""
    output2.innerText = ""
})
