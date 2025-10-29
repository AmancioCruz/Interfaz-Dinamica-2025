import { Cuadrado } from "./figuras.js";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let trazoIniciado = false;

/*
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.fillStyle = "red";

ctx.fillRect(300, 0, 200, 200);
ctx.strokeRect(300, 0, 200, 200);

ctx.beginPath();
ctx.arc(800, 400, 100, 0, Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.fillStyle = "pink";
ctx.arc(400, 400, 100, 0, Math.PI);
ctx.fill();
ctx.stroke();*/

canvas.addEventListener('click',(event)=>{
    const figura = new Cuadrado(event.offsetX, event.offsetY, 100,100, "blue", "green", 5);
    figura.dibujar(ctx);
})

function obtenerPosicionCursor(event) {
    if (trazoIniciado) {
        console.log(event.offsetX, "-", event.offsetY);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.fillStyle = "red";
        ctx.fillRect(event.offsetX, event.offsetY, 100, 100);
        ctx.strokeRect(event.offsetX, event.offsetY, 100, 100);
    }
}

function iniciar(event) {
    console.log(event.offsetX, "-", event.offsetY);
    trazoIniciado = true;
}

function finalizar(event) {
    console.log(event.offsetX, "-", event.offsetY);
    trazoIniciado = false;
}