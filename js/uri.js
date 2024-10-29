const perroActualElement = document.getElementById("perroActual");
const API = "https://dog.ceo/api/breeds/image/random";

document.getElementById("siguiente").addEventListener("click", nuevoPerro);
async function nuevoPerro() {
    perroActualElement.classList.toggle("escondido", true);
    const res = await fetch(API);
    const resJson = await res.json();
    perroActualElement.src = resJson.message;
    perroActualElement.classList.toggle("escondido", false);
}
//Ejecutado
nuevoPerro();