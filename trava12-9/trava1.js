const terminoscond = document.getElementById('terminos');
const miForm = document.querySelector("#miForm")

console.log(terminoscond.classList);







function ischeckboxOn (){
    if (terminoscond.checked)
        {
            miForm.innerText += addForm();

            const miInput = document.getElementById("miInput");
            console.log(miInput);


            //  console.log("he sido seleccionado")

        } else if (!terminoscond.checked)
            {
                miForm.innerHTML ="";
                console.log("he sido deseleccionado");
            }
}

function addForm() {
    const resultado  =""
    resultado =`<input type="test" id="miInput/>`;
    resultado +=`<label> for="miInput">ingresa tu edad</label>`;
    return resultado;
}

terminoscond.addEventListener("change",ischeckboxOn);

console.log(terminoscond);
