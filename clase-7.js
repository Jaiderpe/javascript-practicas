new Promise ((resolve, reject  ) => {
    // lo que retorna si se resuelve satisfactoriamente
    resolve("si se resuelve")
    // 
    reject("no se resolvio")

});

promise .race();

let mypromise = new promise ((resolve, reject) => {
    setTimeout (() => resolve ("promesa 1 completa"), 1000);
});
let mypromise2 = new promise ((resolve, reject) => {
    setTimeout (() => reject ("promesa 2  rechazada"), 500);
});

// * un metodo o clase estatico/ a es a quek que no necesita tener una instancia nueva
promise.race ([mypromise, mypromise2])
.then (function (res){
    console.log("la primera promesa en completarse:",res);
})

.cath((error) =>{
    console.error("la primera promesa en ser rechazada ", error);
}) ;

promise.all()
const promesa1 = promise.resolve(3);
const promesa2 = new promise ((resolve) => setTimeout (() => resolve('foo'), 100));
const promesa3 = fetch('https:// example.com/date');

promise. all((promesa1,  promesa2, promesa3))
    .then((resultados)=> {
        console.log(resultados);
    })
    .cath((error) => {
        connsole.error('erro:',error );
    }); 

Promise.any()// cualquiera

// las promesas son codigos no bloqueante //
// no impide que el resto del programa continue su funcionamiento 
// 
    
