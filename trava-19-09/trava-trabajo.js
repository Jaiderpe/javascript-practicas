class JaiderElement extends HTMLElement {
    constructor(){
        super();
        this.textContent = `Hola mundo`;
        this.id = "miId"
        this.style= `
         display: flex;
         border: 1px solid;
        `;
        this.innerHTML = `
            <style>
            p{
                color:red;
                align-items: center;
            }
            </style>
                
            <div>
                <p>Hola me presento soy jaider adrian perez vega</p>
            </div>S
        `;
    }
    connectedCallback(){
        console.log("se ha creado");   
    }

    disconnectedCallback(){
        console.log("se ha eliminado esta etiqueta");
    } 
}
customElements.define("jaider-element", JaiderElement );


