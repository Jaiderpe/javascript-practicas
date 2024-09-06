const url = "https://api.escuelajs.co/api/v1/users/";

const configuracion = {
    method: "GET ",
    Headers: {
        "content-type": "application/json"
    }
};
fetch(url) //promesas 
    .then(RESPOMDER => RESPOMDER.json()) // archivos
    .then(data => console.log(data)); // datos
