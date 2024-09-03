let contactos = [ ];

const form =contactos.querySelector("#miForm");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const formData = new FormData(form);

    const nombreinpt = formData.get("nombre");
    const eleinput = formData.get("telefono");
    const emailinput = formData.get("email");

    const nuevocontacto = crearobjetocontactos (nombreinpt, eleinput, emailinput);
    agregarcontactos(nuevocontacto);
    form.reset();
});

function crearobjetocontactos(nombrec, telefonoc, emailc){
    return{
        nombre: nombrec,
        telefono: telefonoc,
        email: emailc
    };
}
function agregarcontactos(contactos) {
    try{
        contactos.push(contactos);
        console.log("se se agrego:", contactos);
    } catch (e) {
        console.error("no se agregado:");
    }
}

let contactos1 = [
    {nombre: "juan", telefono: "32323", Email: "jausahd@ad"},
    {nombre: "aniu", telefono: "242342", Email: "jisdjs@rwe"}
];
