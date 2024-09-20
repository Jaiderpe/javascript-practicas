import "./trava1.js"

class JaiderElement extends HTMLElement {

    constructor(){
        super();

        this.attachShadow({mode : "open"});

        this.style.ter= `
         
         display: flex;
         border: 1px solid;
        `;
        this.style= `
         display: flex;
         border: 1px solid;
        `;
        this.shadowRoot.innerHTML = `
            <style>
            p{
                color:black;
                align-items: center;
            }
            </style>
                
            <div>
                <p>INFORMACION PERSONAL:</p>
                <p>Me presento soy jaider adrian perez vega</p>
                <p>Soy aprendis de Campus</p>
                <p>Soy panadero y tabajo de medio tiempo.</p>

            </div>
            <div class ="ter">
                <p>INFORMACION PERSONAL:</p>
                <p>Me presento soy jaider adrian perez vega</p>
                <p>Soy aprendis de Campus</p>
                <p>Soy panadero y tabajo de medio tiempo.</p>

            </div>
         
    
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


