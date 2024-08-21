const titulo = document.querySelector(".titulo");
const boton = document.getElementById("boton");
const agregar = document.querySelector ("#agregar")
const texto = document.querySelector("#texto");
console.log(titulo);
console.log(boton);


boton.addEventListener("click", clickAlBoton);
agregar . addEventListener("click", agregartexto);



function clickAlBoton() {
    let nombre
    do {
        nombre = prompt("dime tu secreto");
    } while (nombre == "");
    console.log("me hiciste click");
    titulo.style.color = "red"
    titulo.innerHTML = "hace calor "
    alert("bienbenido " + nombre);

}
function agregartexto() {
    let nuevotexto = prompt("agrega tu historial")
    texto.innerHTML = nuevotexto;

}