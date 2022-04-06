class Fondo{
    constructor(x, y, ancho, alto){
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.fondoDonas = loadImage('fondoReproductor.jpg')
    }

    show(){
        image(this.fondoDonas, this.x, this.y, this.ancho, this.alto)
    }
}