import { Videojuego } from "./definiciones.js";
import { GestorVideojuegos } from "./gestorVideojuegos.js";

//el main se va a encargar de inicializar la aplicacion 
//de inicializar las funciones 

//Pedirle a un IA que este arreglo se los vuelva un archivo JSON y
//les Agregue otros 10 elementos para que sean 20 en total 
let videojuegos = [
    new Videojuego(1, "Pokémon Rojo y Azul", "Los juegos originales donde comenzó la aventura Pokémon en la región de Kanto."),
    new Videojuego(2, "Pokémon Oro y Plata", "Introducen la región de Johto, los Pokémon de segunda generación y el ciclo de día y noche."),
    new Videojuego(3, "Pokémon Rubí y Zafiro", "Presentan la región de Hoenn y las batallas dobles como nueva mecánica."),
    new Videojuego(4, "Pokémon Diamante y Perla", "Llevan la serie al Nintendo DS con la región de Sinnoh y gráficos mejorados."),
    new Videojuego(5, "Pokémon Negro y Blanco", "Se desarrollan en la región de Teselia con una historia más profunda y nuevos Pokémon."),
    new Videojuego(6, "Pokémon X y Y", "Primeros juegos con gráficos totalmente en 3D, ambientados en la región de Kalos."),
    new Videojuego(7, "Pokémon Sol y Luna", "Ambientados en Alola, reemplazan los gimnasios por los desafíos de las islas."),
    new Videojuego(8, "Pokémon Espada y Escudo", "Introducen la región de Galar, las formas Dinamax y un área silvestre abierta."),
    new Videojuego(9, "Pokémon Leyendas: Arceus", "Rompe con la fórmula tradicional con exploración abierta en la antigua Sinnoh."),
    new Videojuego(10, "Pokémon Escarlata y Púrpura", "Primer juego completamente de mundo abierto ambientado en la región de Paldea.")
];

const gestorVideojuegos = new GestorVideojuegos();
gestorVideojuegos.CargarListaVideojuegos(videojuegos);

gestorVideojuegos.AgregarNuevoVideojuego(new Videojuego(11,'Elemplo','lorem'));