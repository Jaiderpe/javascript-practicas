class JaiderElement extends HTMLElement {
    constructor(){
        super();
        this.textContent = `Hola mundo`;
        this.id = "miId"
        this.style= `
         display: flex;
         border: 1px solid
        `;
        this.innerHTML = `
            <div>
                <p>Hola desde mi componente</p>
            </div>
        `;
    }
    // se ejecuta cuando crea el elemento 
    connectedCallback(){
        console.log("se ha creado");
        //setTimeout(
          //() => {
            //   this.remove();  
           //},3000);    
    }
    // se ejecuta cuando se elimina el elemnto 
    disconnectedCallback(){
        console.log("se ha eliminado esta etiqueta");
    } 
}
customElements.define("jaider-element", JaiderElement );

// callback
