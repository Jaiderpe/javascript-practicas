const root =document.getElementById("root");

const titulo =document.createElement("h1");
titulo.innerText = "Hola Campus";
titulo.id = "miTitulo";

const miForm = document.createElement("form");
miForm.id = "miForm";

const nameInput = crearInput("nombre","text","ingrese el nombre");
const apellidoInput = crearInput("apellido","texr","ingresar el apellido");

const botomEnviar = document.createElement("button");
botomEnviar.innerHTML ="enviar";
miForm.addEventListener("submit", mostrarInfo);

root.appendChild(miForm);
root.appendChild(titulo);

miForm.appendChild(nameInput);
miForm.appendChild(apellidoInput);
miForm.appendChild(botomEnviar);

function crearInput(name, type, placeholder,min,max){
    const miInput = document.createElement("input");
    miInput.id = name;
    miInput.name = name;
    miInput.type = type;
    miInput.placeholder = placeholder;
    min ? miInput.setAttribute("min", min): "";
    max ? miInput.setAttribute("max", max): "";
    return miInput;
}

function mostrarInfo(event){
    event.preventDefault();
    const formData =new FormData(miForm);
    const formNombre = formData.get("nombre");
    const formApellido = formNombre.get("apellido");
    alert(`bienvenido ${formNombre} ${formApellido}`);

}


