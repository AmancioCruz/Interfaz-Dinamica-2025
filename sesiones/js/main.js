import { iniciarSesion } from "./sesiones.js";

const boton_iniciar_sesion = document.querySelector('#iniciar_sesion');
const formulario = document.querySelector("#formulario_inicio_sesion");

boton_iniciar_sesion.addEventListener('click', async (event) => {
    event.preventDefault();
    const datos = new FormData(formulario);
    const datos_usuario = Object.fromEntries(datos.entries());
    const usuario = await iniciarSesion(datos_usuario.correo, datos_usuario.contraseña);
    console.log(usuario);
})