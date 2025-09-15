const url_api = "https://pokeapi.co/api/v2/pokemon";

fetch(url_api).then(respuesta =>{
    if(respuesta.ok){
        console.log(respuesta);
        return respuesta.json();
    }else{
        throw new Error("Error en la peticion: " + respuesta.status);
    }
}).then(datos =>{
    datos.results.forEach(pokemon => {
        console.log(pokemon.name)
        //otra peticion fetch mandado el url del pokemon 
        //para que me devuelva todos los datos de cada pokemon.
    });
})
