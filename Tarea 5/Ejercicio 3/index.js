
let video=document.getElementById("video");

video.addEventListener("play", ()=>{
    console.log("Le diste play")
})

video.addEventListener("ended", ()=>{
    console.log("Termino el vidio")
})

video.addEventListener("pause", ()=>{
    console.log("Medio pausado")
})

