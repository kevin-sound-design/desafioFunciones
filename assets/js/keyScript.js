const teclas = {
    a: "pink",
    s: "orange",
    d: "skyblue",
}

let memoriaTeclas = [];

document.addEventListener("keydown", (e) =>{
    pintarDiv(e);
    if(e.key === "q" && !memoriaTeclas.includes("q")){
        crearElemento("purple");
        memoriaTeclas.push("q");
        
    }
    else if(e.key === "w" && !memoriaTeclas.includes("w")){
        crearElemento("gray");
        memoriaTeclas.push("w");
    }
    else if(e.key === "e" && !memoriaTeclas.includes("e")){
        crearElemento("#4c2f16");
        memoriaTeclas.push("e");
    }
    
})

function pintarDiv(e){

    let div = document.querySelector("#key");
    div.style.backgroundColor = teclas[e.key];

}

function crearElemento(color){

    const body = document.querySelector("body");

    const div = document.createElement("div");

    div.classList.add("createChilds");

    div.style.backgroundColor = color;

    body.append(div);

}













