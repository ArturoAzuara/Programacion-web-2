const dropzone = document.getElementById("dropzone");
const numeros = document.getElementsByClassName("numero");
const botonReiniciar = document.getElementById("reiniciar");

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 3;
    dropzone.textContent = "Dropzone";
    dropzone.classList.remove("correcto", "error");
    console.log("Juego reiniciado. Nuevo número secreto generado.");
}

for(let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    num.addEventListener("dragstart", (e) => {
        console.log(`Iniciaste a arrastrar el número ${num.textContent}`);
        e.dataTransfer.setData("text", num.textContent);
    });

    num.addEventListener("dragend", (e) => {
        console.log(`Soltaste el número ${num.textContent}`);
    });
}

dropzone.addEventListener("dragover", (e) => e.preventDefault());

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Se soltó un número en la dropzone");

    if(intentos <= 0) return;

    let intento = parseInt(e.dataTransfer.getData("text"));

    if(intento === numeroSecreto){
        dropzone.textContent = `¡Correcto! Era ${numeroSecreto}`;
        dropzone.classList.remove("error");
        dropzone.classList.add("correcto");
        intentos = 0;
        console.log("¡Adivinaste el número!");
    } else {
        intentos--;
        dropzone.classList.remove("correcto");
        dropzone.classList.add("error");

        if(intentos > 0){
            if(numeroSecreto > intento){
                dropzone.textContent = `El número a adivinar es mayor que ${intento}. Intentos: ${intentos}`;
            } else {
                dropzone.textContent = `El número a adivinar es menor que ${intento}. Intentos: ${intentos}`;
            }
            console.log(`Intento incorrecto: ${intento}, intentos restantes: ${intentos}`);
        } else {
            dropzone.textContent = `Se acabaron los intentos. Era ${numeroSecreto}`;
            console.log(`Se acabaron los intentos. El número era ${numeroSecreto}`);
        }
    }

    setTimeout(() => {
        dropzone.classList.remove("correcto", "error");
    }, 1000);
});

botonReiniciar.addEventListener("click", reiniciarJuego);