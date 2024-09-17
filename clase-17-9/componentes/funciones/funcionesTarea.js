import contenedorTareas from "../contenedortareas.js";

function agregarTarea (input){
    const textoTarea = input.value;
    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent= textoTarea ;
    console.log(input.value);

    const botonEliminar= document.createElement("button");
    botonEliminar.textContent = "eliminar";

    contenedorTareas.append(parrafoTarea, botonEliminar);
}


function eliminarTarea(){}

export {agregarTarea,eliminarTarea};
