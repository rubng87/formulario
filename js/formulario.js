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

function obtenerFecha () {
    let nacimiento = document.getElementById("fecha").value

// let hoy = "2024-03-03";

 nacimiento = nacimiento.split("-") // ["2006", "3", "4"]

    let hoy = new Date()

    //getDay() dia de la semana 0 al 6
    let hoyDia = hoy.getDate() //dia del mes (1/31)
    let hoyMes = hoy.getMonth()+1
    let hoyAny = hoy.getFullYear()
    console.log(hoyAny);





 //  if( (nacimiento[0] >= (2024-18)) && (nacimiento[1] >= 3) && (nacimiento[2] < 4)) {
//     console.log("Eres menor de edad");
//  } else {
//     console.log("Eres mayor de edad");
//  }

// if((nacimiento[0] > (2024-18)) || (nacimiento[0] == (2024-18) || )) {
//     console.log("Eres menor de edad");
// } else {
//     console.log("Eres maor de edad");
// }


 // console.log(nacimiento)











}
// let fecha = document.getElementById("fecha").value
// console.log(fecha);


// function  obtenerFecha2 () {
//     let mayor = document.getElementById ("mayor")
// }