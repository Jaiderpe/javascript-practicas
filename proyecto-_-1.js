// agragar estudiantes
const  miForm = document.querySelector("#miForm")
let formData = new  FormData();

formData.get("estudiantes");

miForm.addEventListener("submit" ,function (event)  {
    event.preventDefault();

    const datosFormulario = new FormData(miForm);
    const nombreNuevo = datosFormulario.get ("nombre");
    const id =datosFormulario.get("id")
    const grupo =datosFormulario.get("grupo")

    odjeto.estudiantes = nombreNuevo;
    odjeto.estudiantes =id;
    odjeto.estudiantes = grupo;
    console.log(odjeto);

    let estudiantes = [ nombreNuevo,id,grupo]
    console.log(estudiantes)
});


// busqueda de aprendis

