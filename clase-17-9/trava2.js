
import contenedorTareas from "./componentes/contenedortareas.js";
import tirulo from "./componentes/titulo.js";
import creartareaContenedor from "./componentes/creartareacontenedor.js";

const root = document.getElementById("root");


root.append(tirulo);
root.append(creartareaContenedor);
root.append(contenedorTareas);

`
    <titulo>
    <tareaInput> 
    <botonEnviar>
    <contenedorTareas>
        <tareaTexto>
        <botonEliminar>
    </contenerdorTareas>
` 