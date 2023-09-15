//const { createElementBlock } = require("vue")

let api = '55f0160a7ef232d8e4aa4b817347aae0'
let urlbase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.1








// vamos a escuchar  el evento del boton

document.getElementById('botonBusqueda').addEventListener('click',()=>{


    let ciudad = document.getElementById('ciudadEntrada').value

    if(ciudad){
        fetchDatosCiudad(ciudad) // funcio fetchDatosciudad se llama
    }
})

function fetchDatosCiudad(ciudad){
    fetch(`${urlbase}?q=${ciudad}&appid=${api}`)
    .then(data => data.json())
   // .then(data => console.log(data))
   .then(data => mostrarDatosClima(data))  // funcion de mostrar datos clima se llama

}

// se crea la  funcion mostrarDatosClima

function mostrarDatosClima(data){
    console.log(data)

    // en esto se esta  cojiendo lo que lo del div
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const Temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icono = data.main.icon

 // se va crear   la informacion

 const ciudadTitulo = document.createElement('h2')
 ciudadTitulo.textContent = `la  ciudad es : ${ciudadNombre} y su pais  es : ${paisNombre}`

 const temperaturaInfo = document.createElement('p')
 temperaturaInfo.textContent = `la temperatura es: ${ Math.floor(Temperatura-difKelvin)} ºC`

 const humedadInfo = document.createElement('p')
 humedadInfo.textContent = `la humedad es:  ${humedad}`

 const iconoinfo = document.createElement('img')
 iconoinfo.src =  ` https://openweathermap.org/img/wn/10d@2x.png`

 
 const descripcionInfo = document.createElement('p')
 descripcionInfo.textContent = `la  descripcion meterologica es  : ${descripcion}`
    

 divDatosClima.appendChild(ciudadTitulo)
 divDatosClima.appendChild(temperaturaInfo)
 divDatosClima.appendChild(descripcionInfo)
 divDatosClima.appendChild(humedadInfo)
 divDatosClima.appendChild(iconoinfo)
}

