const terminoscond = document.getElementById('terminos');

terminoscond.addEventListener("change", () => {
    const inputEscrito =terminoscond.value.toLowerCase();

    // value es la informacion q nosva a escribir

    if (inputEscrito == "javascript"){
        terminoscond.classList.add("campus");
    }
});









//const miForm = document.querySelector("#miForm")
//const campusclass =document.querySelector(".campus");

//console.log(campusclass);



