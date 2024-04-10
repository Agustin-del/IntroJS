let contenedor = document.getElementById("formMain")
let poster = document.getElementById("poster")

contenedor.addEventListener("submit", (event) => {
    
    event.preventDefault();
    const {color, texto, inputFont} = event.target;
    let grafitiPoster = document.createElement('div');
    grafitiPoster.classList.add("text-xl","break-all", `w-[300px]`, `h-[300px]`, `bg-[${color.value}]`, "p-4");
    let text = document.createElement('h2');
    text.innerText = texto.value;
    text.className = "flex items-center w-full flex-wrap";
    
    for (const element of inputFont) {
        if (element.checked && element.value ==='grafitty') {
           grafitiPoster.classList.add('italic'); 
        }
    }
    // let fuente = document.getElementById('inputFont')
    // if (fuente.checked) {
    //     grafitiPoster.classList.add('italic')
    // }

    contenedor.reset()
    
    let closeButton = document.createElement('span');
    closeButton.classList.add("h-[30px]", "flex", "w-full", "justify-end");
    closeButton.innerHTML = `<img src="./cross.svg" class ="h-[20px]">`;  
    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        grafitiPoster.remove();
    });
    
    grafitiPoster.appendChild(closeButton);
    poster.appendChild(grafitiPoster);
    grafitiPoster.appendChild(text)
});
