function cambioDeColor() {
    let color = document.getElementById("color").value
    console.log(color);
    let body = document.querySelector("body")
    body.style.backgroundColor = color
}

function degradado () {
    let color1 = document.getElementById("color1").value
    let color2 = document.getElementById("color2").value
    let body = document.querySelector("body")
    body.style.backgroundImage = `linear-gradient(120deg, ${color1}, white, ${color2})`


}

function degradadoConico() {
    let color3 = document.getElementById("color3").value
    let color4 = document.getElementById("color4").value
    let conic = document.querySelector(".conic")
    conic.style.backgroundImage = `conic-gradient(${color3}, white, ${color4})`


    
}