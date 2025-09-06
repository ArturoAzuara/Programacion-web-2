let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")

let suma = document.getElementById("suma")
let resta = document.getElementById("resta")
let producto = document.getElementById("producto")

let value1
let value2

let inputResult = document.getElementById("result")

function getvalues(){
    value1 = parseInt(op1.value)
    value2 = parseInt(op2.value)
}

suma.addEventListener("click",()=>{
    getvalues()
    let result = value1 + value2
    inputResult.value = result
})

resta.addEventListener("click",()=>{
    getvalues()
    let result = value1 - value2
    inputResult.value = result
})

producto.addEventListener("click",()=>{
    getvalues()
    let result = value1 * value2
    inputResult.value = result
})
