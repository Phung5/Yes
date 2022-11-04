// Variables

var sideMenuBar = document.querySelector("#Side-Menu")


// function

document.querySelector("#bar-menu").onclick = () => {
    if(sideMenuBar.style.display === "block"){
        sideMenuBar.style.display = "none"
    }else{
        sideMenuBar.style.display = "block"
    }
}

document.querySelector('#Close-Menu').onclick = () => {
    sideMenuBar.style.display = "none"
}

