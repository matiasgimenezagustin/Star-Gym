
let tall, imc, weith, activitySelected;

let scoreImc = 0;

let score = 0;

const scoreAccountant = () => {

    let scoreId = document.getElementById("score");

    scoreId.innerText = "Mis puntos: " + score; 

}



const calculator = () => {

    tall /= 100;

    imc = weith / (tall * tall);

    imc = imc.toFixed(1);

    let imcResult = document.getElementById("resultImc");

    imcResult.innerText = "Su imc es: " + imc;

    return imc;

}

const conditionIMC = (mayorA, menorA, resultCondition) => {

    let recomendation = "\nRecomendamos que acuda a su medico de confianza para contrastar estos datos";
    
    let thisMean = ": \nEsto significa que posee ";

    let recomendationText = "Su IMC es entre " + mayorA + " - " + menorA + thisMean + resultCondition + recomendation;

    return recomendationText;

}

const resultImcCondition = () =>{

    let recomendation = "\nRecomendamos que acuda a su medico de confianza para contrastar estos datos"; 

    let thisMean = ": \nEsto significa que posee ";

    let resultText;

    if (imc < 15){

        resultText = "Su IMC es inferior a 15" + thisMean + "delgadez muy severa." + recomendation;

    }else if ((imc >= 15) && (imc <= 15.9)){

        resultText = conditionIMC(15, 15.9, "delgadez severa");

    }else if((imc >= 16) && (imc <=  18.4)){

        resultText = conditionIMC(16, 18.4, "delgadez");

    }else if((imc >= 18.5) && (imc <=  24.9)){

        resultText = conditionIMC(18.5, 24.9, "peso saludable");

    }else if((imc >= 25) && (imc <=  29.9)){

        resultText = conditionIMC(25, 29.9, "sobrepeso");

    }else if((imc >= 30) && (imc <=  34.9)){

        resultText = conditionIMC(30, 34.9, "obesidad moderada");

    }
    else if((imc >= 35) && (imc <=  39.9)){

        resultText = conditionIMC(35, 39.9, "obesidad severa");

    }
    else if (imc > 40){

        resultText = "Su IMC es mayor a 40" + thisMean + "obesidad severa (morbida)." + recomendation;

    }

    return resultText;
}

const createDomRecomendation = () =>{

    let resultText = resultImcCondition();

    let p = document.getElementById("resultOfCalculator");

    if ((isNaN(tall)== true)||(isNaN(weith)== true)||(tall == 0)||(weith == 0)){

        p.innerText = "Error: solo pueden ingresarse valores numericos NO nulos.";

    }else{

        p.innerText = resultText;

        newAchievementCalculator()

    }
}

let miCalculator = document.getElementById("calculatorForm");

miCalculator.addEventListener("submit",validarFormulario);

function validarFormulario(e){
        
    e.preventDefault();
        
    let formulario = e.target;
        
    tall = parseInt(formulario.children[0].value); 
        
    weith = parseInt(formulario.children[1].value);
    
    calculator(); 

    createDomRecomendation();

}

const newAchievementCalculator = () =>{
    
    if (scoreImc >= 1){

        console.log("scoreImc " + scoreImc);

    }
    else{

        scoreImc += 1;

        score += scoreImc;

        scoreAccountant();

        Swal.fire({

        title: "Nuevo logro desbloqueado",
        
        text: "Usar la calculadora Imc",

        icon: "success",

        timer: 1500,

        })

        console.log(scoreImc)
    }
}    



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

const filterResult = (dificulty) => {

    const resultFilter = arrayActivities.filter ((el) => el.dificulty.includes(dificulty));
    
    return resultFilter;
}

const domResultFilter = (dificulty) => {

    const resultFilter = filterResult(dificulty);

    for (const activites of resultFilter){

        let container = document.createElement("div")

        container.innerHTML =

        `<h3 class="nameOfActivity titleTrain" >Nombre: ${activites.name}</h3>

        <p class="diff dificultyTrain"> Dificultad: ${activites.dificulty}</p>

        <p class="diff durationTrain"> Duration: ${activites.duration}</p>`;

        document.body.appendChild(container);

    }
}

const dificultyFilter = () => {

    if (activitySelected == "principiante"){

        domResultFilter("principiante");

    }else if (activitySelected == "vengador"){

        domResultFilter("vengador");

    }else if (activitySelected == "challenger"){

        domResultFilter("challenger");

    }
}

let selectActivity = document.getElementById("filterForm");

selectActivity.addEventListener("submit", validarFormFilter);

function validarFormFilter(e){
        
    e.preventDefault();

    let formulario = e.target;
        
    activitySelected = formulario.children[1].value; 

    dificultyFilter();

}
