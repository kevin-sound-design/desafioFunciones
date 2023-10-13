const cajas = document.querySelectorAll(".cajas");

cajas.forEach((e)=>{
    e.addEventListener("click", pintarNegro);
})

function pintarNegro(e){

    e.target.style.backgroundColor = "black";

}

