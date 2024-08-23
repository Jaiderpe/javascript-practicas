// literar por cada uni y determinar si entra o ni entra dependiendo si es mayor la edad

const edades = [24,16,12,10,86,75];

edades.forEach((edad) => {
    if (edad >= 18 ){
        console.log("si no puede pasaar");
    }
    else{
        console.log("no puede pasar");
    }
});


// [
// "entra",

// "no entra",
// "entra",
// ]

let resultado = sum(7, 5);
console.log(resultado);

function sum (numero1, numero2){
    return numero1 +numero2;
}

// funcion de suma  , hoisting

//
let suma2 = function(para1,para2,) {return para1 + para2 }; //no hoisting

let suma3 = suma2( 2, 3 );

let suma4 = () => {};

let suma5 = ( num1, num2) => {return num1 + num2};


// variable suma4 es igual a una funcion que hace...

// 24 horas
// parametro = hora de entrada
// si 0 a 12 eviar am
// si es 13 23 pm 
// si  no esta entre 0 y 24 dar una aleerta (alert)

