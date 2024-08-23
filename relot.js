let userTime;

function preguntarhora() {
    userTime = prompt("qu hora es");
    validarhora(userTime);
}


function validarhora(hora){
    if (0 <= hora && hora < 24 ){
        if (hora < 13){
            console.log(hora + "am");
            alert(hora + "am");
        } else if (hora >=13) {
            console.log(hora + "pm");
            alert(hora + "pm");
        }
    } else{
        alert("hora no valida")
    }
}
preguntarhora();