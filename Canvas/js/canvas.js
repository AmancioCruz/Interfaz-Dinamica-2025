import { Circulo, Cuadrado, Linea } from "./figuras.js";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let trazoIniciado = false;
let posicionesCursor = {
    iniciales: {
        x: '',
        y: ''
    },
    actuales: {
        x: '',
        y: ''
    },
    finales: {
        x: '',
        y: ''
    }
}

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


canvas.addEventListener('mousedown', (event) => {
    console.log('Se hizo click', registrarPosicionCursor(event));
    trazoIniciado = true;
    posicionesCursor.iniciales = registrarPosicionCursor(event);
});

canvas.addEventListener('mousemove', (event) => {
    //console.log('el cursor esta sobre el canvas', registrarPosicionCursor(event));
    /*if (trazoIniciado) {
        posicionesCursor.actuales = registrarPosicionCursor(event);

        const linea = new Linea(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
            posicionesCursor.actuales.x, posicionesCursor.actuales.y, 'black', 5);
        linea.dibujar(ctx);

        posicionesCursor.iniciales = registrarPosicionCursor(event);
    }*/
});

canvas.addEventListener('mouseup', (event) => {
    console.log('se dejo de hacer click', registrarPosicionCursor(event));
    posicionesCursor.finales = registrarPosicionCursor(event);

    /*const figura = new Cuadrado(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
        posicionesCursor.finales.x, posicionesCursor.finales.y, "blue", "green", 5);
    figura.dibujar(ctx);*/

    const figura = new Circulo(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y, 
        posicionesCursor.finales.x, posicionesCursor.finales.y, 'red', 'blue',5);
    figura.dibujar(ctx);

    trazoIniciado = false;

    //como hacer para dibujar un cuadrado haciendo click y arrastrando 
    //y que se cree del tamaño en donde suelto el click
});

function registrarPosicionCursor(event) {
    const posicion = { x: event.offsetX, y: event.offsetY };
    return posicion;
}

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