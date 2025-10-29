class Figura {
    constructor(posicion_x, posicion_y, color_linea, color_relleno, grozor_linea) {
        this.posicion_x = posicion_x;
        this.posicion_y = posicion_y;
        this.color_linea = color_linea;
        this.grozor_linea = grozor_linea;
        this.color_relleno = color_relleno;
    }
}

export class Cuadrado extends Figura {
    constructor(posicion_x, posicion_y, alto, ancho, color_linea, color_relleno, grozor_linea) {
        super(posicion_x, posicion_y, color_linea, color_relleno, grozor_linea);
        this.alto = alto;
        this.ancho = ancho;
    }

    dibujar(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color_linea;
        ctx.lineWidth = this.grozor_linea;
        ctx.fillStyle = this.color_relleno;

        ctx.fillRect(this.posicion_x, this.posicion_y, this.ancho, this.alto);
        ctx.strokeRect(this.posicion_x, this.posicion_y, this.ancho, this.alto);
    }

}