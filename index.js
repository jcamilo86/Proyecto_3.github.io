const pais= document.querySelector("input")

function clima(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pais.value}&appid=616629f9acdc3b22b8b09553e632e5da`)
    .then(res=>res.json())
    .then( data=>console.log(data))
}
