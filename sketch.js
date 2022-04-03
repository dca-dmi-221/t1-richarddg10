let fondos
let reproductor
let input
let listaCanciones

let boton

function setup() {
  createCanvas(350, 600)
  fondos = new Fondo(0, 0, 350, 600)
  listaCanciones = []
  input = createFileInput(this.manejarArchivo)
  reproductor = new Reproductor(listaCanciones)
  boton = new BotonPlay()
  boton.show()
  //boton.position(125, 350)
}

function draw() {
  fondos.show()

}

function manejarArchivo(file) {
  console.log(file.type)

  if (file.type === 'audio') {
    let musica = loadSound(file, () => {
      listaCanciones.push(musica)
      //listaCanciones[0].play()
      //listaCanciones[0].currentTime()
      boton.cambio()
      console.log(listaCanciones[0])
      console.log(getAudioContext().state)
    })
  }
}