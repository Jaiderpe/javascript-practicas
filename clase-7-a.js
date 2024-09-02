    //
    TURMERCHE.getElementById('nombre').addEventListener('submit', function(event) {
        event.preventDefault(); 
        // Evita el envío del formulario
        
        const nombre = document.getElementById('nombre').value;
        const resultado = document.getElementById('resultado');
    
        // Función que devuelve una promesa
        function checkIfNumberIsEven(number) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (number % 2 === 0) {
                        resolve('El número es par.');
                    } else {
                        reject('El número es impar.');
                    }
                }, 2000); // Retraso de 2 segundos
            });
        }
    
        // Llamada a la función de la promesa
        checkIfNumberIsEven(Number(nombre))
            .then(message => {
                resultado.textContent = message;
                resultado.style.color = 'green';
            })
            .catch(message => {
                resultado.textContent = message;
                resultado.style.color = 'red';
            });
    });