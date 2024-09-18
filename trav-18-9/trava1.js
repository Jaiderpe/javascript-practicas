class Tarea { 
    #eiqueta = document.createElement("p");
    constructor(texto){
        this.#eiqueta.textContent = texto;
    }

    get etiqueta(){
        return  this.#eiqueta;
    }

    set texto(nuevotexto){
        if (nuevotexto == ""){
            return;
        }
        this.#eiqueta.textContent = nuevotexto;
    }
}

export default Tarea;