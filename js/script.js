

let selectAnOption;

class Activities{

    constructor (name, dificulty, duration){

        this.name = name;

        this.dificulty = dificulty;

        this.duration = duration;

    }
}

const easyActivity1 = new Activities ("Aprendiz Sith", "Principiante", "30 min");

const easyActivity2 = new Activities ("Aprendiz Padawan", "Principiante", "45 min");

const midActivity1 = new Activities ("Caza Recompensas", "Vengador", "1 hr");

const midActivity2 = new Activities ("Jedi", "Vengador", "1,20 hr");

const challengerActivity1 = new Activities ("El camino asi es", "Challenger", "1,30 hr");

const challengerActivity2 = new Activities ("Lord Sith", "Challenger", "1,45 hr");


const arrayActivities = [easyActivity1, easyActivity2, midActivity1, midActivity2, challengerActivity1, challengerActivity2];


const sayHello = () => {

    let askName = prompt("Ingrese su nombre:");

    let h1 = document.getElementById("title");
    
    return h1.innerText = "Bienvenido/a " + askName + " a tu StarGym"
    
}


const selectAnOptionF = () => {

    selectAnOption = prompt("Seleccione que funcion de nuestra app: \n- Calculadora IMC \n- Ejercicios \n- ESC para salir de la app ");

    return selectAnOption;

}

const selectActivityF = () => {

    let selectActivity = prompt("Ingrese la dificultad que desea entre:\n- Principiante\n- Vengador\n- Challenger");

    return selectActivity;

}

const filterResult = (dificulty) => {

    const resultFilter = arrayActivities.filter ((el) => el.dificulty.includes(dificulty));

    
    for (const activites of resultFilter){

        let container = document.createElement("div")
        container.innerHTML =

        `<h3 class="nameOfActivity">Nombre: ${activites.name}</h3>

        <p class="diff"> Dificultad: ${activites.dificulty}</p>

        <p class="diff"> Duration: ${activites.duration}</p>`;

        document.body.appendChild(container);

    };
}

const dificultyFilter = () => {

    let selectActivity = selectActivityF();

    if (selectActivity == "Principiante"){

        filterResult("Principiante");

    }else if (selectActivity == "Vengador"){

        filterResult("Vengador");

    }else if (selectActivity == "Challenger"){

        filterResult("Challenger");

    }
}


const askTall = () => {

    let tall = parseInt(prompt("Indique su altura en centimetros"));

    if (isNaN(tall) == true){

        askTall();

    }

    return tall;

}

//Funcion para pedir peso

const askWeight = () => {

    let weith = parseInt(prompt("Indique su peso corporal en kg"));

    if (isNaN(weith) == true){

        askWeight();

    }

    return weith; 

}


const calculator = () => {

    let tall = askTall();

    tall /= 100;

    let weith = askWeight();

    let imc = weith / (tall * tall);

    imc = imc.toFixed(1);

    let imcResult = document.getElementById("resultImc");

    imcResult.innerText = "Su imc es: " + imc;

    return imc;

}
sayHello()
calculator()
dificultyFilter()

