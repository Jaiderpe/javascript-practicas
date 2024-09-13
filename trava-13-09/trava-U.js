const textArea = document.querySelector("#inputParrafo");

const resultado = document.getElementById("resultado");
const miForm = document.getElementById("miForm");

textArea.value = ""; // alguna extralla razon sin esto tenemos espacios basios

textArea.addEventListener("change",
    function (){
        resultado.innerHTML = "";

        const palabras = textArea.value.split(" ");

        palabras.forEach(palabras => {
            if (palabras.toLowerCase() != "gato"){
                resultado.innerHTML += ` ${palabras}`;
            } else {
                resultado.innerHTML += `<strong>${palabras.toUpperCase()}</strong>`
            }
        });


        //console.log(textArea.value);
        //console.log(palabras);
        //console.log("Eltexto ha cambiado");
    }
);