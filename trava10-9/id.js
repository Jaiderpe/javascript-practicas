const miojet = {
    id:23,
    name: "juan ",
    skill:["java","javascript","rust"],
    present: function(){
        console.log(`hola,me llamo ${this.name} y programaen ${this.skills.map(item => item)}`);
    }
}

function createItem(object){
    if (!object.id){
        console.error("tu odjeto no  tiene id");
        return false;
    }
    object= JSON.stringify(object);
    localHost.setItem(object.id, object);
}

function getobjectByid(id) {
      if (typeof(id) != "number"){
        console.error("id no valido");
        return false;
      }
      const response = localHost.getItem(id);
      return JSON.parce(response);
}

// crear una funcion que muestre los dtaos de local estore

function verStorage() {
    let lista = [];
    for (let index = 0; index < localStorage,length; ++index){
        const key = localStorage.key(index);
        const val = localStorage.getItem(key);
        console.log(val);
        lista.push(val);
    }
    lista.forEach(item => console.log(item))
    return lista;

}


for (let [key, val] of localStorage){
    console.log(`${key}: ${val}`);
}

// getAttribute() como husarlo 

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

input1.setAttribute("placeholder", "colombia vs argentina")

const currentyear = new Date().getFullYear().toString();
console.log(currentyear);

input2.setAttribute("max", currentyear);



input3.addEventListener("click", () => {
    input1.setAttribute("type","password");
});

input3.addEventListener("click", () => {
    const atribute = input1.setAttribute("type");

    if (atribute == "text"){
        input1.setAttribute("type","text");
        setTimeout
    }
});
 input2.addEventListener("change", ()=> {
    input3.toggleAttribute("disabled", false);
 });

// husuario 

console.log(input1.getAttribute("profe"));

input1.addEventListener("change", () => {
    if(input1.value != ""){
    input1.setAttribute("contestado","true");
} else {
    input1.setAttribute("contestado","false");
}
    console.log(input2.getAttribute("contestado"));
})

// 1 ingresamos a las propiedades con getAttribute()
// 2 las modificamos con setAtribute()
// 3 modificamos los atributos booleanos toggleAttribute()


// para añadir la etiqueta del body a js

const mibody = document.querySelector("body");

for (let i = 0; i < 5; ++1){
    mibody.innerHTML += 
    `h${i} id="etiqueta${i}"
        >hola mundo
    </h${i}`;

    const mietqueta = document.getElementById( `etiqueta` + i) ;
    console.log(mietqueta)
}

//Hacer un checkbox que nos pregunte si aceptamos una encuesta y al seleccionarlo que aparezca una encuenta. BONUS:
// la info puesta en la encuesta después de darle enviar se muestra en la pagina web