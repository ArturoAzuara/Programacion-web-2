let liga = document.getElementById("liga");
let nombre = document.getElementById("nombre")


liga.addEventListener("click", (evento)=>{
    console.log("Click sobre el link");
    evento.preventDefault();
})

nombre.addEventListener("keydown",(evento)=>{
    //evento.preventDefault();
    console.log(evento.type);
    console.log("codigo: " + evento.code);
    console.log("key: " + evento.key);
    console.log(evento.repeat);
    console.log(evento.ctrlKey ? "Presionaste control + " + evento.key : " solo " + evento.key)
    nombre.innerText = nombre.innerText + evento.key;
    // if (evento.key === 'a'){
    //   document.getElementById("edad").focus();
    // }
    if(evento.key === 'Enter'){
        console.log("Enter capturado")
        document.getElementById("edad").focus();
    }

    console.log("Location teclado: " + evento.location);

});

document.getElementById("formulario").addEventListener("submit",()=>{
    console.log("Validar campo... ")
    console.log("Se envio el formulario")
    evento.preventDefault();
});

document.getElementById("autos").addEventListener("change", (evento) =>{
    console.log("Se cambio el valor")
    console.log(document.getElementById("autos").value);
});
