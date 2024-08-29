Array.prototype
Number.prototype

// agregar , buscar, eliminar o modificar
//crud 
// push(); modifica el array y lo devuelve 
// pop(); eliman el ultimo elemento  
// splice();  espara eliminar o remplazar elementos estensos       
const numeros = [1,2,3,4,5] ;
const indice = 3;
const cuantoselimino = 2 ;
const numeroagregar = [5, 8 ,12,40];
 numeros.splice(indice, cuantoselimino,  [...numeroAgregar]);       
 // toString();para acomodar el array en una cadena de texto
 //let mar = [nombre :"array"]
 mar.toString();
 // join(); se utiliza para concatenar una cadena e imprime esa cadenaresulante.(csv)
 // join tambien sirve para  me permite elegir 
 //   a  Todos
//Crea una función flecha que tome un array de estudiantes, donde cada estudiante es un objeto con las propiedades nombre y calificación. La función debería devolver un nuevo array con los nombres de los estudiantes que hayan obtenido una calificación superior a 70.

//RESULTADO
//Los estudiantes que cumple con la condición son :
//[ Alice, Charlie ]

