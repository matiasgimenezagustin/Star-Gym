

const switchButton = document.getElementById("switchButton");

switchButton.addEventListener("click", switchTheme);

const style = document.documentElement.style;

function switchTheme(){

    switcher();

}


const switcher = () => {


    if(( style.getPropertyValue("--color-claro") == "#99ff00")){

        local("theme", false);

        style.setProperty("--color-claro", "#fcf65a");

        style.setProperty("--color-oscuro", "#b1813b");

        style.setProperty("--color-focus", "#ffae00");
        
        document.getElementById("logo").src = "./img/Your-Helper-logo-yellowTheme.png";

        console.log(theme + " el theme es marron")



    }
    else{

        style.setProperty("--color-claro", "#99ff00");

        style.setProperty("--color-oscuro", "#005e00");

        style.setProperty("--color-focus", "#70b607");

        document.getElementById("logo").src = "./img/Your-Helper-logo.png";

        console.log(theme + " el theme es verde")


    }
}

theme