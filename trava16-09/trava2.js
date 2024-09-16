const root = document.getElementById("root");


const titulo = document.createElement("h1");
titulo.innerText = "Hola Campus";
titulo.id = "miTitulo";

root.append(titulo);
root.append("Increible");

setTimeout(() => {
    root.removeChild(titulo);
},5000);


