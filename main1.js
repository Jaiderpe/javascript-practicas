// Obtén el elemento del DOM donde se mostrará el contador
const contadorElemento = document.getElementById('contador');

// Inicializa el contador en 0
let contador = 0;

// Obtén el botón de incrementar
const botonIncrementar = document.getElementById('incrementar');

// Función para incrementar el contador y actualizar el DOM
function incrementarContador() {
    contador += 1; // Incrementa el contador
    contadorElemento.textContent = contador; // Actualiza el contenido del elemento
}

// Agrega un event listener al botón para ejecutar la función cuando se hace clic
botonIncrementar.addEventListener('click', incrementarContador);
