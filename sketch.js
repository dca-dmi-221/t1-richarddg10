let fondos
let reproductor
let input
let listaCanciones

let btnPlayPause
let btnStop
let btnNext
let btnPrevious

let sVolume

let music = []
i = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  fondos = new Fondo(0, 0, 350, 600)
  //listaCanciones = []
  //input = createFileInput(this.manejarArchivo)
  //reproductor = new Reproductor(listaCanciones)
  //boton = new BotonPlay()
  //boton.show()
  btnPlayPause = createButton("Play")
  btnPlayPause.position(125, 350)
  btnPlayPause.mousePressed(playPause)

  btnStop = createButton("Stop")
  btnStop.position(125, 380)
  btnStop.mousePressed(stop)

  btnNext = createButton("Next")
  btnNext.position(170, 350)

  btnPrevious = createButton("Previous")
  btnPrevious.position(50, 350)

  sVolume = createSlider(0, 1, 0.5, 0.01)
  sVolume.position(90, 400)
}

function draw() {
  fondos.show()
  music[i].setVolume(sVolume.value())
}

function preload(){
  music[0] = loadSound("pantysito.mp3")
  music[1] = loadSound("la_inocente.mp3")
}

/*
function manejarArchivo(file) {
  console.log(file.type)

  if (file.type === 'audio') {
    let musica = loadSound(file, () => {
      listaCanciones.push(musica)
      listaCanciones[0].play()
      //listaCanciones[0].currentTime()
      console.log(listaCanciones[0])
      console.log(getAudioContext().state)
    })
  }
}


function playPause() {
  if (!this.listaCanciones[i].isPlaying()) {
      this.listaCanciones[i].play()
      btnPlayPause.html("Pause")
  } else {
      this.listaCanciones[i].pause()
      btnPlayPause.html("Play")
  }
}*/

function playPause() {
  if (!music[i].isPlaying()) {
      music[i].play()
      btnPlayPause.html("Pause")
  } else {
      music[i].pause()
      btnPlayPause.html("Play")
  }
}

function stop(){
  music[i].stop()
}