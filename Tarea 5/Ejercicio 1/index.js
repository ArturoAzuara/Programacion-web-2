let origen = document.getElementById("fuente");
let destino = document.getElementById("destino");

origen.addEventListener("dragstart", (evento)=>{
    evento.dataTransfer.setData("plain/text","dato importante")
    evento.dataTransfer.setData("application/id","101")
    evento.dataTransfer.setData("application/json", JSON.stringify(
        {
            id : 101,
            nombre : 'jose',
            saldo: 45678.9,
            saldo : true
        }
    ))
    console.log("Inicio el arrastre")
});

destino.addEventListener("dragover",(evento)=>{
    evento.preventDefault();
});

destino.addEventListener("drop", (evento)=>{
    evento.preventDefault();
    console.log("Soltado");
    const datos = evento.dataTransfer.getData("plain/text")
    console.log(datos)
    console.log("Ei de usuario = " + evento.dataTransfer.getData("application/id"))
    console.log("Ei de usuario = " + JSON.parse(evento.dataTransfer.getData("application/json"))
    )});
