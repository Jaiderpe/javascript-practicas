const miArray = [];

const botonpush = document.getElementById("push_button");

const resultadopush = document.querySelector("#push_resultado");

botonpush.addEventListener("click",()=> {
    const inputpush = document.getElementById
    ("push_input");
    miArray.push(inputpush.value);
    resultadopush.innerText = miArray;
});

const popButtom = document.getElementById("pop_button");
popButtom.addEventListener("click", ()=> {
    console.log (miArray.pop());
});

const forEachButton =document.getElementById("foreach_button");
 forEachButton.addEventListener("click", ()=>{
    const forEachrespuesta = document.getElementById("foreach_resultado");
    miArray.forEach((valor,index)=>{
        forEachrespuesta.innerHTML += `
        <p> Mi amigo fue a ${index + 1} ${valor}</p>
        `;
    });
 });

