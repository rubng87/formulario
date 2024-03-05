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

function obtenerFechaDate () {
    //Obtener el valor del input tip date
    let nacimiento = document.getElementById("fecha").value
    //Convertir el valor en un array 
    nacimiento = nacimiento.split("-") // ["2006", "3", "4"]

    //Obtener la fecha actual
    let hoy = new Date()
    //De la fecha actual extraemos dia, mes y año
    //getDay() dia de la semana 0 al 6
    let hoyDia = hoy.getDate() //dia del mes (1/31)
    let hoyMes = hoy.getMonth()+1
    let hoyAnyo = hoy.getFullYear() // esto es un Number

    let nacimientoDia = Number (nacimiento[2])
    let naciminetoMes = Number (nacimiento[1])
    let nacimientoAnyo = Number (nacimiento[0]) // Ahora también es un Number

    let edad = hoyAnyo - nacimientoAnyo

    if (hoyMes < naciminetoMes) {
        edad--
    } else if ((hoyMes === naciminetoMes)) {
        if (hoyDia < nacimientoDia) {
            edad--
        }
    }
    //console.log(`Tienes ${edad} años`);

    
    let parrafoEdad = document.getElementById("mayorEdad")
    parrafoEdad.style.fontWeight = "bold"
    if (edad < 18) {
    parrafoEdad.innerText = "Ees menor de edad"
    parrafoEdad.style.color = "red"
    
    } else {
    parrafoEdad.innerText = "Ees mayor de edad"
    parrafoEdad.style.color = "green"

    }

}

function obtenerInformacionSelectSimple() {
    let datoSelect = document.getElementById ("cars").value
    console.log("Has elegido:", datoSelect);
}
    
function obtenerInformacionSelectMultiple() {

    let selectMultiple = document.getElementById("cars2").options
    console.log(selectMultiple);

    let arraySeleccionados = []
    for (let i = 0; i < selectMultiple.length; i++) {
        console.log(selectMultiple[i]);
        if(selectMultiple[i].selected) {
            arraySeleccionados.push(selectMultiple[i].value)
        }
    }
}

console.log("Tus marcas preferidas son:", arraySeleccionados);





 