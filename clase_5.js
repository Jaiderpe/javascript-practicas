const miFormulario = document.querySelector("#miFormulario");
const resultado = document.querySelector("#resultado");

let edad = 24;

miFormulario.addEventListener("submit", function(event) {
    event.preventDefault();

// necesita un formulario y guarda la informacion de un formulario
    let datosFormulario = new FormData (miFormulario); 
// chekear lod datod del formulario 
   // console.log(miFormulario.entries().toArray());

    for(let [ key, value] of datosFormulario.entries()) {
        resultado.innerHTML += 
          `<p><strong>${key.toUpperCase()}<strong> - ${value}</p>` ;
       // console.log(key, value)
    }
    edad = parseInt(datosFormulario.get("edad"));
     //const fechanacimiento = 2024 =datodformulario.get("edad");
     //console.log(fechanacimiento);
     console.log(edad);
});

export default edad;