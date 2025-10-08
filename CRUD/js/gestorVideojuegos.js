/**
 * Manejo de los datos de la lista o arreglo de videojuegos
 * Este se debe engargar de manejar el CRUD del Arreglo de vodeojuegos:
 * -Crear elementos nuevos en el arreglo(Agregar nuevo videojuego)
 * -Leero todos los elementos del arreglo de videojuegos
 * -Actualizar datos de los elementos del arreglo
 * -Eliminar un elemento en especifico
*/
export class GestorVideojuegos {
    constructor() {
        this.listaVideojuego = null;
        this.videojuegoSleccionado = null;
    }
    //carga una lista de videojuegos ingresada por el usuario
    CargarListaVideojuegos(arreglo_videojuegos) {
        this.listaVideojuego = arreglo_videojuegos;
    }
    //se agrega un nuevo videojuego a la lista de videojuegos cargada
    AgregarNuevoVideojuego(videojuego) {
        //primero validando que evista el arreglo
        //validando que exiasta el objeto
        //validando que los datos no se repitan
        try {
            if (!this.listaVideojuego)
                throw new Error('La lista de videojuegos no ha sido inicializada');
            if (!videojuego)
                throw new Error('EL videojuego enviado es nulo');
            if (!videojuego.id || !videojuego.titulo || !videojuego.descripcion)
                throw new Error('Alguno de los datos es nulo');

            this.listaVideojuego.push(videojuego);
            console.log(this.listaVideojuego);
        }
        catch (error) {
            return error;
        }
    }
    //
    ObtenerListaDeVideojuegos() {
        //debe retornar toda la lista de videojuego si esta ya se inicializo
        try {
            if (!this.listaVideojuego)
                throw new Error('La lista de videojuegos no ha sido inicializada');
            return this.listaVideojuego;
        }
        catch (error) {
            return error;
        }
    }
    //
    ObtenerVideojuegoPorID(id) {
        //debe retornar un videojuego siempre que le usuario le hay amandado el id
        //debe validar que el videojuego exista si no solo que diga (lanzar un error) que no se encontro
        try {
            if (!this.listaVideojuego)
                throw new Error('La lista de videojuegos no ha sido inicializada');
            
            const videojuego = this.listaVideojuego.find(videojuego => videojuego.id === id);

            for(let i =0;i<this.listaVideojuego.length; i++){
                if(this.listaVideojuego[i].id === id){
                    return this.listaVideojuego[i];
                }
            }

            if (!videojuego)
                throw new Error(`No se encontró un videojuego con el id: ${id}`);

            return videojuego;
        }
        catch (error) {
            return error;
        }
    }

}