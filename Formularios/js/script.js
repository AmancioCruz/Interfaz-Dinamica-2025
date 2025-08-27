const elementos = document.querySelector("#elementos");

function crearimagen(event){
    console.log(event.target.value);
    elementos.innerHTML = "";
    for(let i = 0; i< event.target.value; i++){
        const imagen = new Image();
        imagen.src = "../recursos/pikachu.jpg";
        imagen.classList.add("imagen-nueva");
        elementos.appendChild(imagen);
    }
    /*
    const imagen = `<img src="recursos/pikachu.jpg"></img>`;
    elementos.innerHTML = imagen;*/

    /*const imagen = document.createElement("img");
    imagen.src = "../recursos/pikachu.jpg";
    imagen.classList.add("imagen-nueva");
    elementos.appendChild(imagen);
    console.log(imagen);*/
}