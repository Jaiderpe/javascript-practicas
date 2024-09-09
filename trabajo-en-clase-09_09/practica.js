let mikey = "cam"
let mivalue = {nombre: "cam", edad: 17}; // json.stringify (mivalue)->'[{"nombre": "juan", "edad": "17"}]'

function crearStorageItem (key, value){
    // revisar que l key esa texto
    if (typeof(key) != "string"){
        console.error("lo siento, las llaves solo pueden ser texto")

        return;
    }
    const valorJson = JSON.stringify(value);
    localStorage.setItem(key, valorJson);
    console.log(localStorage);
}
function updateStorageItem (key, value){
    let newvalue;
    // revisar que l key esa texto
   
    const resultado = JSON.parse(localStorage.getItem(key));
    if (resultado  == null);{
        console.error("no existe esa entrada");
        return;
    }

    switch (typeof(value)) {
        case "object":
            const newvalue = { ...resultado,...value};
            console.log(newvalue);
            break;
        default:
            break;
    }  
    console.log(resultado);
}

switch (diaDelasemana){
    case "lunes":
        console.log("hoy es lunes")
        break; 
    case "martes":
        console.log("hoy es martes")
    case "miercoles":
        console.log("voy al gimnasio");
        break;
    default:
        console.log("hoy notrabajo");
        break;
}


crearStorageItem(mikey, mivalue);
crearStorageItem(mikey,mivalue);

function verStorage(){
    console.log(localStorage);
}
function deleteAllStorage (){
    localStorage.clear();
}

function getItemkey(key){
    let dato = JSON.parse(localStorage.getItem(key));
    
}