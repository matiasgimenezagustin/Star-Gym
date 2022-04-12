
const local = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}

const getLocal = (key) => {

    return JSON.parse(localStorage.getItem(key))

}

let score = getLocal("score");

let scoreId = document.getElementById("scoreMisiones");

scoreId.innerText = "Mis puntos: " + score;


const input = document.querySelector("#input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("#ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {

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
