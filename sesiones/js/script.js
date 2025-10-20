const usuario = {
    correo: 'amancio@gmail.com',
    contraseña: '12345678'
}
const formulario = document.querySelector("#formulario_inicio_sesion")
function iniciarSesion(event) {
    event.preventDefault();
    const datos = new FormData(formulario);
    const datos_usuario = Object.fromEntries(datos.entries());

    if (datos_usuario.correo && datos_usuario.contraseña) {
        //una vez se valida que el usuario haya ingresado los dos campos se inicia la sesion
        if(datos_usuario.correo === usuario.correo){
            if(datos_usuario.contraseña === usuario.contraseña){
                console.log('Datos correctos');
                localStorage.setItem('usuario',JSON.stringify(usuario));
            }else{
                console.log('constraseña incorrecta');
            }
        }else{
            console.log('correo incorrecto');
        }
    }
}
function cerrarSesion(){
    localStorage.removeItem('usuario');
}