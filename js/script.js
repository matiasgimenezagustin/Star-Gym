
let tall;

let weith;

let selectAnOption;

class Activities{

    constructor (name, dificulty, duration){

        this.name = name;

        this.dificulty = dificulty;

        this.duration = duration;

        this.sayDificulty = function (){
            
            let sayDificulty = "\n" + this.dificulty;
    
            return sayDificulty;
        }
    }
}

const easyActivity1 = new Activities ("Aprendiz Sith", "principiante", "30 min");

const easyActivity2 = new Activities ("Aprendiz Padawan", "principiante", "45 min");

const midActivity1 = new Activities ("Caza Recompensas", "vengador", "1 hr");

const midActivity2 = new Activities ("Jedi", "vengador", "1,20 hr");

const challengerActivity1 = new Activities ("El camino asi es", "challenger", "1,30 hr");

const challengerActivity2 = new Activities ("Lord Sith", "challenger", "1,45 hr");


const arrayActivities = [easyActivity1, easyActivity2, midActivity1, midActivity2, challengerActivity1, challengerActivity2];


const sayHello = () => {

    let askName = prompt("Ingrese su nombre:");

    let h1 = document.getElementById("title");
    
    return h1.innerText = "Bienvenido/a " + askName + " a tu StarGym";
    
}


const selectAnOptionF = () => {

    selectAnOption = prompt("Seleccione que funcion de nuestra app: \n- Calculadora IMC \n- Ejercicios \n- ESC para salir de la app ");

    return selectAnOption;

}

const selectActivityF = () => {

    let selectActivity = prompt("Ingrese la dificultad que desea entre:" + easyActivity1.sayDificulty() + midActivity1.sayDificulty() + challengerActivity1.sayDificulty());

    return selectActivity.toLowerCase();

}

const filterResult = (dificulty) => {

    const resultFilter = arrayActivities.filter ((el) => el.dificulty.includes(dificulty));
    
    return resultFilter;
}

const domResultFilter = (dificulty) => {

    const resultFilter = filterResult(dificulty);

    for (const activites of resultFilter){

        let container = document.createElement("div")
        container.innerHTML =

        `<h3 class="nameOfActivity">Nombre: ${activites.name}</h3>
        <p class="diff"> Dificultad: ${activites.dificulty}</p>
        <p class="diff"> Duration: ${activites.duration}</p>`;

        document.body.appendChild(container);

    }
}

const dificultyFilter = () => {

    let selectActivity = selectActivityF();

    if (selectActivity == "principiante"){

        domResultFilter("principiante");

    }else if (selectActivity == "vengador"){

        domResultFilter("vengador");

    }else if (selectActivity == "challenger"){

        domResultFilter("challenger");

    }
}



const calculator = () => {

    tall /= 100;

    let imc = weith / (tall * tall);

    imc = imc.toFixed(1);

    let imcResult = document.getElementById("resultImc");

    imcResult.innerText = "Su imc es: " + imc;

    return imc;

}

let miCalculator = document.getElementById("calculatorForm");

miCalculator.addEventListener("submit",validarFormulario);

function validarFormulario(e){
        
    e.preventDefault();
        
    let formulario = e.target;
        
    tall = parseInt(formulario.children[0].value); 
        
    weith = parseInt(formulario.children[1].value); 
    calculator(); 
}






