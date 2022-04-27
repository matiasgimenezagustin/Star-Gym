
let tall, imc, weith, activitySelected, score, scoreImc;


const local = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
    
}

const getLocal = (key) => {

    return JSON.parse(localStorage.getItem(key))

}


const imgSelected = document.getElementById("imgSelected");

const uploader = document.getElementById("imgUploader");

const claudinaryUrl = "https://api.cloudinary.com/v1_1/dipy/image/upload";

const claudinaryIdPreset = "nngflhcm";


if ((getLocal("userImg") == null)||(getLocal("userImg") == undefined)){

    imgSelected.src = "./img/user-default-img.png";

}else{

    imgSelected.src = getLocal("userImg");

}

uploader.addEventListener("change", async (e) => {

    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", claudinaryIdPreset);

    console.log(formData)

    const res = await axios.post(claudinaryUrl, formData,{

        headers:{

            "Content-Type": "multipart/form-data"

        }
    })

    console.log(res);

    let srcImgSelected = res.data.secure_url;

    local("userImg", srcImgSelected);

    imgSelected.src = srcImgSelected;

})

if (getLocal("theme") == null){

    local("theme", "verde");

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

        document.getElementById("logoFooter").src = "./img/Your-Helper-logo-yellowTheme.png";

        document.getElementById("logo").src = "./img/Your-Helper-logo-yellowTheme.png";

    }else if (theme == "verde"){

        themes("#99ff00","#005e00","#70b607");

        document.getElementById("logoFooter").src = "./img/Your-Helper-logo.png";

        document.getElementById("logo").src = "./img/Your-Helper-logo.png";

    }
}

selectedDefaultTheme();

const switcher = () => {
    if( getLocal("theme") == "verde"){

        local("theme", "marron");

        themes("#fcf65a","#b1813b","#ffae00");

        document.getElementById("logoFooter").src = "./img/Your-Helper-logo-yellowTheme.png";

        document.getElementById("logo").src = "./img/Your-Helper-logo-yellowTheme.png";

    }
    else if (getLocal("theme") == "marron") {

        local("theme", "verde");

        themes("#99ff00","#005e00","#70b607");

        document.getElementById("logo").src = "./img/Your-Helper-logo.png";

        document.getElementById("logoFooter").src = "./img/Your-Helper-logo.png";
    }
}

const switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", switcher);

const validateUser = () =>{

    let titlePage = document.getElementById("title");

    let getUsername = getLocal("username");

    if ( (getUsername == null) || (getUsername == undefined)){

        getUsername = "user";
    }

    titlePage.innerText = "Bienvenido/a " + getUsername + " StarGym";

}

validateUser();

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

    local("imc", imc);

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
    
    if (getLocal("scoreImc") >= 1){

        console.log("scoreImc " + scoreImc);

    }
    else{

        scoreImc += 1;

        local("scoreImc", scoreImc)

        score += scoreImc;

        local("score", score)

        scoreAccountant();

        Swal.fire({

        title: "Nuevo logro desbloqueado",
        
        text: "Usar la calculadora Imc",

        icon: "success",

        timer: 1500,

        })
    }
}    



let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registrar = (e) => {

    e.preventDefault();
        
    let formulario = e.target;
        
    let username = formulario.children[1].value;
    
    console.log(username + "hola");

    localStorage.setItem("username", JSON.stringify(username));

    validateUser();

}) 

function registrar(e){
        
    e.preventDefault();
        
    let formulario = e.target;
        
    let username = formulario.children[1].value;
    
    console.log(username + "hola");

    localStorage.setItem("username", JSON.stringify(username));

} 

const input = document.querySelector("#input");

const addBtn = document.querySelector(".btn-add");

const ul = document.querySelector("#ul");

const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {

    e.preventDefault();
    
    const text = input.value;

    if (text == ""){

        input.placeholder = "No puede ser vacio";

    }
    else{
        
        input.placeholder = "Aregar mision";

        const li = document.createElement("li");

        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);

        li.appendChild(addDeleteBtn());

        ul.appendChild(li);

        input.value = "";

        empty.style.display = "none";
    }
}) 

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
