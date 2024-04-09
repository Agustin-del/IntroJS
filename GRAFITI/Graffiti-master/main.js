let contenedor = document.getElementById("formMain")
let poster = document.getElementById("poster")
let text = document.getElementById("texto")
let colour = document.getElementById("color")

contenedor.addEventListener("submit", (event) => {
    event.preventDefault();
    const { color, texto } = event.target;
    let grafitiPoster = document.createElement('div');
    grafitiPoster.classList.add("text-xl","break-all", `w-[300px]`, `h-[300px]`, `bg-[${color.value}]`, "p-4");
    let text = document.createElement('h2')
    text.innerText = texto.value;
    text.className = "flex items-center w-full flex-wrap"
    
    let fuente = document.getElementById('inputFont')
    if (fuente.checked) {
        grafitiPoster.classList.add('italic')
    }

    contenedor.reset()
    let closeButton = document.createElement('button');
    closeButton.classList.add("h-[30px]", "object-fit", "w-full", "text-right");
    closeButton.textContent = "X";  
    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        grafitiPoster.remove();
    });
    
    grafitiPoster.appendChild(closeButton);

    poster.appendChild(grafitiPoster);
    grafitiPoster.appendChild(text)
});
