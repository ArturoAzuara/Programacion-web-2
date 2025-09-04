let edad = 20;

if(edad >= 18){
    console.log("Eres mayor de edad");
    console.log("Fin.")
}

//---------------------------

let edad = 20;

if(edad >= 18){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}

console.log("Fin.")

//-----------------------

let edad = 20;
let traeIne = true

if(edad >= 18){
    if(traeIne){
        console.log("Bienvenido al shine");
    }else{
        console.log("No puedes entrar");
    }
}else{
    console.log("Eres menor de edad");
}
console.log("fin")

//-------------------------------

let dia = 'dd'

if (dia == 'lunes'){
    console.log("Inicio de semana");
}
else if(dia == 'martes'){
    console.log("Segundo lunes!!");
}
else if(dia == 'miercoles'){
    console.log("Ombligo de la semana");
}
else if(dia == 'jueves'){
    console.log("Precopeo");
}
else if(dia == 'viernes'){
    console.log("Hoy toca");
}
else{
    console.log("A descansar!!!!")
}

//---------------------------------
let dia= 'sabado'

switch(dia){
    case 'lunes':
        console.log("Inicio de semana");
        break;
    case 'martes':
        console.log("Segundo Lunes");
        break;
    case 'miercoles':
        console.log("Ombligo de la semana");
        break;
    case 'jueves':
        console.log("Pre viernes");
        break;
    case 'viernes':
        console.log("Hoy toca y el cuerpo lo sabe!!!");
        break;
    default:
        console.log("A descansar!");
}

//---------------------------------

for (let i = 1; i <= 5; i++) {
    console.log("Hola "+i)
}

//---------------------------------

const miArray = ["a", "b", "c"];

for (let indice in miArray){
    console.log(indice);
}

//------------------------------------

let contador = 1;

while(contador <= 5){
    console.log("Contador: "+contador);
    contador++
}

//----------------------------------

const calificaciones = [9,7,10,5,8];

for (let i=0; i<calificaciones.length; i++){
    console.log(calificaciones[i])
}

//-----------------------------------

let numero = 0;

do{
    console.log("Numero: " + numero);
    numero++;
} while(numero <3);

//------------------

for (let i=1;i<=10;i++) {
    if (i===3) continue;
    if (i===5)break;
    console.log("i = " + i);
}

//--------------------------------

function recorrerArray(array, callback){
    for(let i = 0; i < array.length; i++)
        callback(array[i]);
}

recorrerArray([1,2,3], function(num){
    console.log("Numero: ", num);
});