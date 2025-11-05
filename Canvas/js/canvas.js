import { Circulo, Cuadrado, Linea } from "./figuras.js";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let trazoIniciado = false;
const figuras = [];
let figura = null;
let opcion = 'lapiz';
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

document.querySelector('#boton_circulo').addEventListener('click', () => {
    opcion = 'circulo';
});
document.querySelector("#boton_cuadrado").addEventListener('click', () => {
    opcion = 'cadrado';
});
document.querySelector("#boton_lapiz").addEventListener('click', () => {
    opcion = 'lapiz';
});
document.querySelector("#boton_linea").addEventListener('click', () => {
    opcion = 'linea';
});
document.querySelector("#boton_sticker").addEventListener('click', () => {
    opcion = 'sitcker';
});
document.querySelector("#boton_borrador").addEventListener('click', () => {
    opcion = 'borrador';
});
document.querySelector("#boton_limpiar").addEventListener('click', () => {
});
document.querySelector("#boton_deshacer").addEventListener('click', () => {
});

canvas.addEventListener('mousedown', (event) => {
    trazoIniciado = true;
    posicionesCursor.iniciales = registrarPosicionCursor(event);
});

canvas.addEventListener('mousemove', (event) => {
    posicionesCursor.actuales = registrarPosicionCursor(event);

    if (trazoIniciado) {

        console.log('opcion seleccionada', opcion);
        switch (opcion) {
            case 'lapiz':
                const posicionesTemporalesIniciales = registrarPosicionCursor(event);
                const posicionesTemporalesFinales = registrarPosicionCursor(event);   
                break;
            case 'cadrado':
                figura = new Cuadrado(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
                    posicionesCursor.actuales.x, posicionesCursor.actuales.y, 'blue', 'green', 5);
                break;
            case 'circulo':
                figura = new Circulo(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
                    posicionesCursor.actuales.x, posicionesCursor.actuales.y, "blue", "green", 5);
                break;
            case 'linea':
                figura = new Linea(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
                    posicionesCursor.actuales.x, posicionesCursor.actuales.y, 'green', 5)
                break;
            case 'sitcker':
                break;
            default:
                break;
        }



        if (figura && opcion !== 'lapiz') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            renderizarFiguras();
            figura.dibujar(ctx);
            figura = null;
        }

    }
});

canvas.addEventListener('mouseup', (event) => {
    posicionesCursor.finales = registrarPosicionCursor(event);

    switch (opcion) {
        case 'lapiz':
            break;
        case 'cadrado':
            figura = new Cuadrado(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
                posicionesCursor.finales.x, posicionesCursor.finales.y, 'blue', 'green', 5);
            break;
        case 'circulo':
            figura = new Circulo(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y,
                posicionesCursor.finales.x, posicionesCursor.finales.y, "blue", "green", 5);
            break;
        case 'linea':
            figura = new Linea(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y, 
                posicionesCursor.finales.x, posicionesCursor.finales.y, 'green', 5)
            break;
        case 'sitcker':
            break;
        default:
            break;
    }

    if (figura != null)
        figuras.push(figura);

    renderizarFiguras();
    trazoIniciado = false;
});

function registrarPosicionCursor(event) {
    const posicion = { x: event.offsetX, y: event.offsetY };
    return posicion;
}

function renderizarFiguras() {
    if (figuras.length > 0) {
        figuras.forEach(figura => {
            figura.dibujar(ctx);
        })
    }
}
