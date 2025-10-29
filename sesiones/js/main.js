import { iniciarSesion } from "./sesiones.js";

const boton_iniciar_sesion = document.querySelector('#iniciar_sesion');
const formulario = document.querySelector("#formulario_inicio_sesion");

boton_iniciar_sesion.addEventListener('click', async (event) => {
    event.preventDefault();

    const datos = new FormData(formulario);
    const datos_usuario = Object.fromEntries(datos.entries());

    if (!datos_usuario.correo || !datos_usuario.contraseña) {
        alert("Por favor, completa todos los campos");
        return;
    }

    const usuario = await iniciarSesion(datos_usuario.correo, datos_usuario.contraseña);

    if (usuario) {
        alert(`Bienvenido ${usuario.nombre}`);
        // Ejemplo: redirigir a otra página
        // window.location.href = "principal.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
});