const url = "https://jsonplaceholder.typicode.com/posts";
const datos_enviar = {
    title: 'Post 1',
    body: 'contenido del post',
    userId: 1
};

//utlilizamos la palabra async para definir una funcion como asincrona
//await, solo se puede ejercutar dentro de funciones definidas como asincronas 
//se utliza para esperar una respuesta de una funcion asincrona
async function peticionFetchGet(url) {
    try {
        const respuesta = await fetch(url);
        if(!respuesta.ok){
            throw new Error('Error HTTP: ', respuesta.status);
        }
        const datos = await respuesta.json();
        //console.log(datos);
        return datos;
    }
    catch(error) {
        return error;
    }
}

async function peticionFetchPost(url, datos_a_enviar){
    try{
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos_a_enviar)
        });

        if(!respuesta.ok){
            throw new error('Error HTTP: ', respuesta.status);
        }

        const datos = await respuesta.json();
        return datos;
    }
    catch(error){
        return error;
    }
}

//then es el metodo que se relaciona con klo que sucede en el try cuando si funciona
//catch es cuando se da un error y me retorna un error
peticionFetchGet(url)
.then(respuesta => {
    respuesta.forEach(element => {
        console.log(element)
    });
})
.catch(error=>{
    console.log(error);
});

peticionFetchPost(url, datos_enviar)
.then(datos=>{console.log(datos)})
.catch(error=>{
    console.log(error);
})

