const local = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}

const getLocal = (key) => {

    return JSON.parse(localStorage.getItem(key))

}

let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registrar)


function registrar(e){
        
    e.preventDefault();
        
    let formulario = e.target;
        
    let username = formulario.children[1].value;
    
    console.log(username + "hola");

    localStorage.setItem("username", JSON.stringify(username));

}

let score = getLocal("score");

let scoreId = document.getElementById("scoreRegister");

scoreId.innerText = "Mis puntos: " + score;

