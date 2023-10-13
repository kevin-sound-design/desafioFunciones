/* Ejemplo base

function pintar(){
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); */

const ele = document.querySelectorAll(".ele");

ele.forEach((e)=>{
    e.addEventListener("click", (evento)=>{
        pintar(evento, "yellow")
    });
    e.style.backgroundColor = "green"
})

function pintar(evento, color){
    
    evento.target.style.backgroundColor = color;
}















