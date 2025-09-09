let origen = document.getElementById("fuente");
let destino = document.getElementById("destino");

origen.addEventListener("dragstart", (evento)=>{
    console.log("Inicio el arrastre")
});

destino.addEventListener("dragover",(evento)=>{
    evento.preventDefault();
});

destino.addEventListener("drop", (evento)=>{
    evento.preventDefault();
    console.log("Soltado");
});

