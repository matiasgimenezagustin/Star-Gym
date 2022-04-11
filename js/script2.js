let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registrar)


function registrar(e){
        
    e.preventDefault();
        
    let formulario = e.target;
        
    let username = formulario.children[1].value;
    
    console.log(username + "hola");

    localStorage.setItem("username", JSON.stringify(username));

    


}

const local = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}



local( "eter", "magia")

let getEter = JSON.parse(localStorage.getItem("eter"));

