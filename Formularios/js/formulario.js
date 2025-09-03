const formulario_producto_nuevo = document.querySelector("#formulario_producto_nuevo");

class Producto{
    constructor(id,nombre, decripcion, precio){
        this.Id = id;
        this.Nombre = nombre;
        this.Descripcion = decripcion;
        this.Precio = precio;
    }
    ObtenerDatos(){
        console.log(this.Id);
        console.log(this.Nombre);
        console.log(this.Decripcion);
        console.log(this.Precio);
    }
}

function AgregarProducto(event){
    let lectorFormulario = new FormData(formulario_producto_nuevo);
    //console.log(lectorFormulario);
    const datos = Object.fromEntries(lectorFormulario.entries());
    const json = JSON.stringify(datos);
    console.log(json);
}