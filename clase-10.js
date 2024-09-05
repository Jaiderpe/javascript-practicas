// enpoint ==punto de accseso
//https://api.escuelajs.co/api/v1/users/

const url= "https://api.escuelajs.co/api/v1/users/"

fetch(url)  // treigame la informacion
    .then(res =>res.json()) // lee la informacion
    .then(data => console.log(data)); // muestra en consola

const ur1 = "https://api.escuelajs.co/api/v1/users/";

const formulario = document.getElementById("formulario");
const resultadosDiv = document.getElementById("resultado");

 formulario.addEventListener("submit", async (event) =>{
    event.preventDefault();

    const formdata = new FormData(formulario);
    const numeroingresado = formdata.get("idpersona");

    const datospersona = await traerDatos(numeroingresado);

   // console.log(datospersona);
    //resultadosDiv.innerHTML = 
    //`<h3>email</h3> <p>${datospersona.email}</p>
    //<h3>Nombre</h3> <p>${datospersona.email}</p>
    //<h3>contraseña</h3> <p>${datospersona.email}</p>
    //`;
mostrarresultados(datospersona);
   // fetch(ur1);
   //traerDatos(numeroingresado)
    //console.log(typeof(numeroingresado));
 });
function mostrarresultados(odjetopersona) {
    resultadosDiv.innerHTML = 
    `<h3>email</h3> <p>${odjetopersona.email}</p>
    <h3>Nombre</h3> <p>${odjetopersona.name}</p>
    <h3>contraseña</h3> <p>${odjetopersona.password}</p>
    `;
}
 async function traerDatos(idpersona) {
    return fetch(ur1  + idpersona)
    .then  (archivo => { return archivo.json()})
    .then (data => data);

 }
 //return await this.array[0];
 // return
 // como aser que en la consola me salga el js