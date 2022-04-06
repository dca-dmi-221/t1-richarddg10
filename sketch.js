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
  fondos = new Fondo(0, 0, 1150, 720)
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
  btnStop.mousePressed(parar)

  btnNext = createButton("Next")
  btnNext.position(170, 350)
  btnNext.mousePressed(next)

  btnPrevious = createButton("Previous")
  btnPrevious.position(50, 350)
  btnPrevious.mousePressed(previous)

  sVolume = createSlider(0, 1, 0.5, 0.01)
  sVolume.position(90, 400)
}

function draw() {
  fondos.show()
  music[i].setVolume(sVolume.value())
  if (music[0].isPlaying() === true) {
    image(portadaCancion1, 60, 50, 250, 250)
  }
  if (music[1].isPlaying() === true) {
    image(portadaCancion1, 60, 50, 250, 250)
  }

  if (music[0].isPlaying() === true) {
    textSize(30)
    text("Pantysito - Alejo, Feid, Robi", 60, 50)
  } else {
    if (music[1].isPlaying() === true) {
      textSize(30)
      text("La inocente - Mora, Feid", 60, 50)
    }
  }
}

function preload() {
  music[0] = loadSound("pantysito.mp3")
  music[1] = loadSound("la_inocente.mp3")
  portadaCancion1 = loadImage('portadaPantysito.jpg')
  portadaCancion2 = loadImage('portadaLaInocente.jpg')
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

function parar() {
  music[i].stop()
}

function next() {
  parar()
  if (i < music.length - 1) {
    i++
  } else {
    i = 0
  }
  playPause()
}

function previous() {
  parar()
  if (i < music.length + 1) {
    i--
  } else {
    i = 0
  }
  playPause()
}