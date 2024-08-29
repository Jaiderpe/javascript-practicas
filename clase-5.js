const form = document.querySelector("#registro");
const FormData = new FormData(form);
console.log(formData);

// key - value 
// FormData.keys();
//FormData.values();
// FormData.entries(); -> iterable -> array -> [{key: value}, {key: value}]

form.addEventListener("submit", function(event) {
    event.preventDefault();
    for(let[key, val ] of formData) {
        console.log(key,val);
    }
    console.log("subieron el formulario");
});

//
//or(let[key, val ] of formData) {
 //   console.log(key,val);}
//console.log(datosform.get("hobby/gusto"));



// setTimeout(callback(), nmber cantidad de tiempo);
setTimeout(() => {
    onsole.log("demorado por un segundo");
}, 1000); // milisegundo 1000 = 1 segundo
   

//metodo 2 callback
setTimeout(function(){
    console.log("set timeout");
}, 1000);
//metodo 3
function imprimirNumeros(){
    console.log("numeros")
}
// callback
setTimeout(imprimirNumeros, 2000);