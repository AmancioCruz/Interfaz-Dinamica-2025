import { Videojuego } from "./definiciones.js";
const formulario = document.querySelector("#formulario_agregar");
const contenedor_elementos = document.querySelector('#contenedor_elementos_juegos');
let videojuegos = [];

const obtener_datos_formulario = (event) => {
    console.log("funcion para obtener datos");
    const datos_formulario = new FormData(formulario); //lee el formulario y obtiene todo el fomrulario
    const datos = Object.fromEntries(datos_formulario.entries()); //convertminos en objeto 
    
    //validar que le usuario ingrese datos en el
    //formulario mostrandoile en la vista un mensaje de error
    //si el usuario no ingreso nada, que en la vista aprezca un mensaje de que debe ingresar datos
    //una vez validado que el usuario ingreso datos crear la tarjeta con el elemento que se agrego al arreglo
    //solo el ultimo
    //es mostrae '1- Nombre del juego'
    
    //se agregan los videojuegos nuevos a un arreglo de vidoejuegos
    videojuegos.push(new Videojuego(
        videojuegos.length + 1, datos.titulo, datos.descripcion
    ));

    crearElementoVista(videojuegos[0].titulo, videojuegos[0].descripcion)

    console.log(videojuegos);
    //const juego = new Videojuego();
};

const crearElementoVista = (titulo_videojuego, descripcion_videojuego) => {
    const elemento = document.createElement('div');
    elemento.classList.add("elemento-lista-juegos");

    const titulo = document.createElement('h1');
    titulo.textContent = titulo_videojuego;

    const descripcion = document.createElement('p');
    descripcion.textContent = descripcion_videojuego;

    const boton_editar = document.createElement('button');
    boton_editar.classList.add('editar');
    boton_editar.textContent = 'Editar';

    const boton_eliminar = document.createElement('button');
    boton_eliminar.classList.add('eliminar');
    boton_eliminar.textContent = 'Eliminar';

    elemento.appendChild(titulo);
    elemento.appendChild(descripcion);
    elemento.appendChild(boton_editar);
    elemento.appendChild(boton_eliminar);
    contenedor_elementos.appendChild(elemento);
};

document.querySelector("#boton_agregar").addEventListener('click', () => {
    obtener_datos_formulario();
    crearElementoVista();
})