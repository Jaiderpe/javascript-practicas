import botonEnviar from "./botonenviar.js";
import tareaInput from "./ingresarnombre.js";
import { agregarTarea } from "./funciones/funcionesTarea.js";

const creartareaContenedor = document.createElement("div");

botonEnviar.addEventListener("click", ()=> agregarTarea(tareaInput));

creartareaContenedor.append(tareaInput);
creartareaContenedor.append(botonEnviar)

export default creartareaContenedor;
