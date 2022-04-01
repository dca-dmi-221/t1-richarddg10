let fondos
let reproductor
let input
let listaCanciones


function setup() {
  createCanvas(350, 600)
  fondos = new Fondo(0, 0, 350, 600)
  listaCanciones = []
  input = createFileInput(this.manejarArchivo)
  reproductor = new Reproductor(listaCanciones)
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
        console.log(listaCanciones[0])
        console.log(getAudioContext().state)
      })
  }
}
