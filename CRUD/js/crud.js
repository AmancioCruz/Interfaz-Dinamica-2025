import { Videojuego } from "./definiciones.js";
const formulario = document.querySelector("#formulario_agregar");
const contenedor_elementos = document.querySelector('#contenedor_elementos_juegos');
let videojuegos = [];

const obtener_datos_formulario = (event) => {
    console.log("funcion para obtener datos");
    const datos_formulario = new FormData(formulario); //lee el formulario y obtiene todo el fomrulario
    const datos = Object.fromEntries(datos_formulario.entries()); //convertminos en objeto 
    try {
        if (!datos.titulo || !datos.descripcion) {
            throw new Error('No se han ingresado los datos en el formulario');
        }
        //aqui hacer la logica para agregar a los videojuegos 
        videojuegos.push(new Videojuego(
            videojuegos.length + 1, datos.titulo, datos.descripcion
        ));
        if (videojuegos.length >= 0) {
            const ultimo_videojuego = videojuegos[videojuegos.length - 1];
            crearElementoVista(ultimo_videojuego.titulo, ultimo_videojuego.descripcion);
        }

        eliminar_videojuego(videojuegos.length);

    } catch (error) {
        document.querySelector("#mensaje_error").hidden = false;
        document.querySelector("#mensaje_error").textContent = error.message;
    }
};

function eliminar_videojuego(id) {

    //necesito recibir el id del elemento que quiero eliminar
    const videojuego_a_eliminar = videojuegos.filter(videojuego => videojuego.id === id);
    try {
        if(!videojuego_a_eliminar) {
            throw new Error('no se puede eliminar el juego, ya que no existe');
        }
        //areglo =[1,2,3,4,5,6,7];
        //arreglo.splice(0,2); va a eliminar el 1 y 2
        //        splice(arreglo[0], cantidad de elentos a borrar)
        //arreglo.splice(1,3) va a borrar el 2,3,4
        videojuegos.splice();
        //sirve para eliminar un elemento de un arreglo indice, cantidad de elementos a borrar
        console.log('puedo eliminar el juego');
    }catch(error){
        console.log(error);
    }
}

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
})