class BotonPlay {
    constructor() {
        this.listaCanciones = listaCanciones
    }

    show() {
        createButton("play")
        //button.position(125, 350)
    }

    cambio() {
        if (!this.listaCanciones.isPlaying()) {
            this.listaCanciones.play()
            button.html("pause")
        } else {
            this.listaCanciones.pause()
            button.html("play")
        }
    }
}