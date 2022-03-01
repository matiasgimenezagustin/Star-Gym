

/* El algoritmo de momento a desarrollar en el proyecto final cuenta con la siguientes funcionalidades:

-Calculadora Indice de Masa Corporal

-Filtrado por planes de ejercicio
*/

//Variables Globales

let selectAnOption;

//Creacion de objetos de ejercicios con class

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

//Funcion para saludar

const sayHello = () => {

    let askName = prompt("Ingrese su nombre:");

    return alert("Bienvenido " + askName);
    
}

//Funcion para elegir una accion

const selectAnOptionF = () => {

    selectAnOption = prompt("Seleccione que funcion de nuestra app: \n- Calculadora IMC \n- Ejercicios \n- ESC para salir de la app ");

    return selectAnOption;

}

//Funcion para mostrar opciones de ejercicios
const selectActivityF = () => {

    let selectActivity = prompt("Ingrese la dificultad que desea entre:\n- Principiante\n- Vengador\n- Challenger");

    return selectActivity;

}

const filterResult = (dificulty) => {

    const resultFilter = arrayActivities.filter ((el) => el.dificulty.includes(dificulty));

    return alert("Los resultados de su busqueda son: \n" + resultFilter[0].name + "\n- Dificultad: " + resultFilter[0].dificulty + "\n- Duracion: " + resultFilter[0].duration + "\n" + "\n" + resultFilter[1].name + "\n- Dificultad: " + resultFilter[1].dificulty + "\n- Duracion: " + resultFilter[1].duration  );

}

//Filtrador de dificultad con resultados (Los resultados prefiero ponerlos en la segunda entrega ya que aun no se bien que ejercicios pondre. Pero dejo el filtrador hecho o almenos "el protofiltrador")

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




//Funciones de opcion de CalculadoraIMC

//Funcion para pedir Altura

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

//Funcion de calculo del IMC

const calculator = () => {

    let tall = askTall();

    tall /= 100;

    let weith = askWeight();

    let imc = weith / (tall * tall);

    imc = imc.toFixed(1);

    return imc;

}



//Funcion para dar el IMC con parametros 

const conditionIMC = (mayorA, menorA, resultCondition) => {

    let recomendation = "\nRecomendamos que acuda a su medico de confianza para contrastar estos datos";
    
    let thisMean = ": \nEsto significa que posee ";

    return alert("Su IMC es entre " + mayorA + " - " + menorA + thisMean + resultCondition + recomendation);

}

//Funcion para a partir del IMC del usuario, dar un diagnostico

const resultImcCondition = () =>{

    let recomendation = "\nRecomendamos que acuda a su medico de confianza para contrastar estos datos"; 

    let thisMean = ": \nEsto significa que posee ";

    let imc = calculator();

    if (imc < 15){

        alert("Su IMC es inferior a 15" + thisMean + "delgadez muy severa." + recomendation);

    }else if ((imc >= 15) && (imc <= 15.9)){

        conditionIMC(15, 15.9, "delgadez severa");

    }else if((imc >= 16) && (imc <=  18.4)){

        conditionIMC(16, 18.4, "delgadez");

    }else if((imc >= 18.5) && (imc <=  24.9)){

        conditionIMC(18.5, 24.9, "peso saludable");

    }else if((imc >= 25) && (imc <=  29.9)){

        conditionIMC(25, 29.9, "sobrepeso");

    }else if((imc >= 30) && (imc <=  34.9)){

        conditionIMC(30, 34.9, "obesidad moderada");

    }
    else if((imc >= 35) && (imc <=  39.9)){

        conditionIMC(35, 39.9, "obesidad severa");

    }
    else if (imc > 40){

        alert("Su IMC es mayor a 40" + thisMean + "obesidad severa (morbida)." + recomendation);

    }
}




//Ciclo While con las funcionalidades

sayHello();

while (selectAnOptionF() != "ESC"){

    if (selectAnOption == "Calculadora IMC"){

        resultImcCondition();

    }else if (selectAnOption == "Ejercicios"){

        dificultyFilter();

    }
}
