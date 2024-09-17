class Estudiante{
    edad;
    #region 
    constructor(nombre){
        this .nombre = nombre;
    };
    Estudiar (){
        console.log("estoy estudiando");
    }
}

class EstudianteUni extends Estudiante {               
    #semestre = 8;

    constructor(nombre){
        super(nombre);
    }

    Estudiar(){
        console.log("estoy estudiando en la universidad");
    }
    get semestre(){
        return `estoy en ${this.#semestre} semestre` ;
    }
}

new Estudiante("andres").Estudiar();
const Estudiante1 = new EstudianteUni("juan");
Estudiante1.edad =16;
//Estudiante1.nombre="JUAN"
Estudiante1.Estudiar();
console.log(Estudiante1.semestre);

