//En este arschivio se gestionaran las sesiones 
//-Inicio de sesion, 
//-Cerrar sesion, 
//-y saber si hay un usuario con una sesion activa

export async function iniciarSesion(correo, contraseña) {
    try {
        if (!correo || !contraseña)
            throw new Error('Se deben enviar el correo y la contraseña');

        const listaUsuarios = await cargarJSON('../datos/usuarios.json');

        if (!listaUsuarios)
            throw new Error("La lista de usuario es NULL");

        const usuario = listaUsuarios.find(usr =>
            usr.correo === correo && usr.contrase === contraseña);

        if (usuario) {
            localStorage.setItem('usuario', JSON.stringify(usuario));
            return usuario;
        }
        else {
            throw new Error("Correo o contraseña incorrectos");
        }

    }
    catch (error) {
        console.error(error);
    }
}

export async function obtenerSesionActiva() {
    try {
        const datos = await localStorage.getItem('usuario');

        if (!datos)
            throw new Error('No hay sesion activa');

        const usuario = JSON.parse(datos);
        return usuario;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export async function cerrarSesion() {
    try{
        const usuarioActivo = await obtenerSesionActiva();

        if(!usuarioActivo){
            throw new Error('No hay una sesion activa actualmente');
        }

        await localStorage.removeItem('usuario');
    }
    catch(error){
        return error;
    }
}

export async function cargarJSON(url_archivo) {
    try {
        if (!url_archivo)
            throw new Error("Se debe ingresar el URL del archivo");

        const respuesta = await fetch(url_archivo);

        if (!respuesta.ok)
            throw new Error("No se pudo cargar el archivo: ", respuesta.status);

        const datos = await respuesta.json();
        return datos;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}