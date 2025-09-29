import { Videojuego } from "./definiciones.js";
const formulario = document.querySelector("#formulario_agregar");

const obtener_datos_formulario = (event)=>{
    console.log("funcion para obtener datos");
    const datos_formulario = new FormData(formulario); //lee el formulario y obtiene todo el fomrulario
    const datos = Object.fromEntries(datos_formulario.entries()); //convertminos en objeto 
    console.log(datos);
    const juego = new Videojuego();
};

document.querySelector("#boton_agregar").addEventListener('click', ()=>{
    obtener_datos_formulario();
})