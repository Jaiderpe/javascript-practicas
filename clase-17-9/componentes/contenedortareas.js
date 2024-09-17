import textoTarea from "./textoTarea.js";
import eliminarTarea from "./buttomeliminar.js";

const contenedorTareas = document.createElement("div")
contenedorTareas.append(textoTarea);
contenedorTareas.append(eliminarTarea);

export default contenedorTareas;

