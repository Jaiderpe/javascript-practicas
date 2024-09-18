import contenedorTareas from "../contenedortareas.js";

function agregarTarea (input){
    const tarjeta = document.createElement("div")
    tarjeta.style = `display : flex; gap:8px;`

    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent= input.value.trim();

    input.value = null;

    
    const isComplete= document.createElement("input");
    isComplete.type = "button";
    isComplete.value = "tachar";
    isComplete.addEventListener("click", ()=> completartarea(isComplete,parrafoTarea));

    const botonactualizar = document.createElement("button");
    botonactualizar.textContent= "actualizar";
    botonactualizar.style = `
    color:black;
    background-color:red;
    border: 1px solid grey;
    `;

    botonactualizar.addEventListener
    ("click", ()=> actualizartarea(input, parrafoTarea));


    const botonEliminar= document.createElement("button");
    botonEliminar.textContent = "eliminar";
    botonEliminar.style = `
    color:black;
    background-color:green;
    border: 1px solid grey;
    `;


    botonEliminar.addEventListener("click", ()=> eliminarTarea(tarjeta));


    tarjeta.append(parrafoTarea, botonEliminar,botonactualizar,botonsurallar);
    contenedorTareas.append(tarjeta);
}


function actualizartarea(nuevatarea, tarea){
    tarea.textContent = nuevatarea.value;
    nuevatarea.value="";
    nuevatarea.placeholder = "tarea actualizadad!";
    setTimeout(()=>{
        nuevatarea.placeholder = "ingresa tarea";
    },3000);
}

function completartarea(input, tarea){
    if (input.checked){
        tarea.style =
        `text-decoration: line-through;`;
    } else {
        tarea.style =
    }
}

function eliminarTarea(tarjetatarea){
 tarjetatarea.remove();
}

function eliminartodastareas(){
    contenedorTareas.innerHTML ="";
    alert
}

export {agregarTarea,eliminarTarea, };
