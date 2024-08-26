const mi0bj = {
            nombre: "juan",
            metod1: function ( ){
                return "hola mundo"
            },
            metodo2: function ()  {
                console.log(this.metod1() );
            }
};
let saludo = mi0bj.metod1(); 

const calcularExpresion= ({ a, b, c }) => (a * b) + c;

// Ejemplo de ejecución
const resultado = calcularExpresion({ a: 10, b: 2, c: 5 });


console.log("El valor total calculado de la expresión es: "+{resultado});

//ejemplo

const mi0bj1 = {
    nombre: "juan",
    metod1: function ( ){
        return "hola mundo"
    },
    metodo2: function ()  {
        console.log(this.metod1() );
    }
};
let saludo3 = mi0bj.metod1(); 

const calcularExpresion1 = ({ a, b, c }) => (a * b) + c;

//correcion de actvidad
const calcularExpresiona = ({ a, b, c }) => (a * b) + c;                                    
    const resultado1 = {                        
     a:10, b:2, c:5,                           
    };
const resultados = calcularExpresiona(resultado1);

console.log(resultados);

//Crea una función flecha que tome un objeto con las propiedades a, b y c, y devuelva el resultado de la siguiente expresión matemática: (a * b) + c. Utiliza desestructuración en los parámetros.
//Ejemplo de Ejecución: El valor total calculado de la expresión 10