//Variables Globales importantes

let tall, imc, weith, activitySelected, score, scoreImc;


/*Funciones para entrar y salir del LocalStorage*/

const local = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
    
}

const getLocal = (key) => {

    return JSON.parse(localStorage.getItem(key))

}

if (getLocal("theme") == null){
    local("theme", "verde")

}

const style = document.documentElement.style;

const themes = (colorClaro, colorOscuro, colorFocus) => {

    style.setProperty("--color-claro", colorClaro);
    style.setProperty("--color-oscuro", colorOscuro);
    style.setProperty("--color-focus", colorFocus);
}

const selectedDefaultTheme = () =>{

    let theme = getLocal("theme");

    if (theme == "marron"){

        themes("#fcf65a","#b1813b","#ffae00");

        document.getElementById("logo").src = "./img/Your-Helper-logo-yellowTheme.png";
    }else if (theme == "verde"){

        themes("#99ff00","#005e00","#70b607")

        document.getElementById("logo").src = "./img/Your-Helper-logo.png";

    }
}

selectedDefaultTheme();

const switcher = () => {
    if( getLocal("theme") == "verde"){

        local("theme", "marron");

        themes("#fcf65a","#b1813b","#ffae00");

        document.getElementById("logo").src = "./img/Your-Helper-logo-yellowTheme.png";

    }
    else if (getLocal("theme") == "marron") {

        local("theme", "verde");

        themes("#99ff00","#005e00","#70b607");

        document.getElementById("logo").src = "./img/Your-Helper-logo.png";
    }
}
const switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", switcher);






//Username Protocol

const validateUser = () =>{

    let titlePage = document.getElementById("title")

    let getUsername = getLocal("username");

    if ( (getUsername == null) || (getUsername == undefined)){

        getUsername = "user";
    }

    titlePage.innerText = "Bienvenido/a " + getUsername + " StarGym";

}

/* localStorage.clear() */


const scoreAccountant = () => {

    let scoreId = document.getElementById("score");

    scoreId.innerText = "Mis puntos: " + score; 

}

const validateScore = () =>{

    score = getLocal("score");

    if ((score == null) || (score == NaN)){

        score = 0;
        
    }
}

validateScore();

scoreImc = getLocal("scoreImc");

scoreAccountant();

const calculator = () => {

    tall /= 100;

    imc = weith / (tall * tall);

    imc = imc.toFixed(1);

    let imcResult = document.getElementById("resultImc");

    imcResult.innerText = "Su imc es: " + imc;

    return imc;

}

/* let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registrar = (e) => {

    e.preventDefault();
        
    let formulario = e.target;
        
    let username = formulario.children[1].value;
    
    console.log(username + "hola");

    localStorage.setItem("username", JSON.stringify(username));

}) */

/* 
function registrar(e){
        
    e.preventDefault();
        
    let formulario = e.target;
        
    let username = formulario.children[1].value;
    
    console.log(username + "hola");

    localStorage.setItem("username", JSON.stringify(username));

} */

const input = document.querySelector("#input");

const addBtn = document.querySelector(".btn-add");

const ul = document.querySelector("#ul");

const empty = document.querySelector(".empty");

/* addBtn.addEventListener("click", (e) => {

    e.preventDefault();
    
    const text = input.value;

    if (text == ""){

        input.placeholder = "No puede ser vacio"

    }
    else{
        
        input.placeholder = "Aregar mision"

        const li = document.createElement("li");

        const p = document.createElement("p")

        p.textContent = text;

        li.appendChild(p);

        li.appendChild(addDeleteBtn())

        ul.appendChild(li);

        input.value = "";

        empty.style.display = "none";
    }
}) */

function addDeleteBtn () {

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent ="x";

    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {

        const item = e.target.parentElement;

        ul.removeChild(item);

        const items = document.querySelectorAll("li")

        if (items.length === 0){

            empty.style.display = "block";

        }
    })

    return deleteBtn;
}
