const textArea = document.querySelector("#inputParrafo");
const condicion = document.getElementById("palabramagicas");
const resultado = document.getElementById("resultado");

textArea.value = ""; // alguna extralla razon sin esto tenemos espacios basios


    function actualizarResultados(){
        resultado.innerHTML = "";
        const palabras = textArea.value.split(" ");
        const palabramagicas = condicion.value.toLowerCase();

        palabras.forEach(palabra => {
            if (palabra.toLowerCase() != palabramagicas){
                resultado.innerHTML += ` ${palabra}`;
            } else {
                resultado.innerHTML += ` <strong class="resaltado">
                ${palabra}</strong>`
            }
        });
    }
textArea.addEventListener("chage", actualizarResultados);
condicion.addEventListener("change", actualizarResultados);