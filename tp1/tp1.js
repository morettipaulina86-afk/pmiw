//Paulina Moretti, comision 3
//127004/3
//tp 1


let miMusica;
let sonidoSalto;
let fondo;
let framesParado = [];
let framesCaminar = [];
let framesSaltar = [];


// (2: Caminando automático, 3: Saltando)
let estadoAnimacion = 2; 
let posX = -100;
let velocidadAnimacion = 12;  

// Variable para medir el tiempo que dura el salto
let contadorSalto = 0;
let duracionSalto = 35; // Cantidad de fotogramas que dura el salto en el aire

function preload() {
  
  fondo = loadImage('data/fondo.png');
  miMusica = loadSound('data/supermariobros.mp3');
  sonidoSalto = loadSound('data/mariosalto.mp3');

  let imgParado = loadImage('data/marioparado0.png');
  framesParado.push(imgParado);

 
  let imgCamina1 = loadImage('data/mariocaminando2.png');
  let imgCamina2 = loadImage('data/mariocaminandoo5.png');
  framesCaminar.push(imgCamina1);
  framesCaminar.push(imgCamina2);

 
  let imgSalta = loadImage('data/mariosaltando3.png');
  framesSaltar.push(imgSalta);
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Dibujar el fondo
  if (fondo) {
     image(fondo, 0, 0, width, height);
  }
  
  // Borde retro
  dibujarBordeRetro(16);

  //
  posX = posX + 2.5; 
  if (posX > width + 50) {
    posX = -100; 
  }

  
  if (estadoAnimacion === 3) {
    contadorSalto++;
    // Si pasa el tiempo del salto, vuelve automáticamente a caminar (estado 2)
    if (contadorSalto > duracionSalto) {
      estadoAnimacion = 2;
      contadorSalto = 0; // Reiniciamos el contador para el próximo salto
    }
  }

 
  let arrayFramesActual;
  if (estadoAnimacion === 1) {
    arrayFramesActual = framesParado;
  } else if (estadoAnimacion === 2) {
    arrayFramesActual = framesCaminar;
  } else {
    arrayFramesActual = framesSaltar;
  }

  let frameActual = calcularFrameActual(velocidadAnimacion, arrayFramesActual.length);
  let posYDinamica = calcularPosicionY(estadoAnimacion); // LLAMADA A FUNCIÓN QUE RETORNA UN VALOR

 
  dibujarPersonaje(posX, posYDinamica, 0.7, arrayFramesActual, frameActual);
}


function calcularPosicionY(estado) {
  let yBase = 170; // Suelo por defecto
  if (estado == 3) {
    yBase = 100; // Altura cuando salta
  }
  return yBase; 
}


function calcularFrameActual(velocidad, totalFrames) {
  return int(frameCount / velocidad) % totalFrames;
}


function dibujarBordeRetro(grosor) {
  push();
  stroke(0);          
  strokeWeight(grosor);   
  noFill();           
  rect(0, 0, width, height); 
  pop();
}


function dibujarPersonaje(x, y, escala, arrayFrames, indiceFrame) {
  push();
  translate(x, y); 
  scale(escala);          
  
  if (arrayFrames[indiceFrame]) {
    image(arrayFrames[indiceFrame], 0, 0);
  }
  
  pop(); 
}


function keyPressed() {
  
  if (keyCode === ENTER || key === 'Enter') {
    if (!miMusica.isPlaying()) {
      miMusica.loop();
      miMusica.setVolume(0.4);
    }
  }

 
  if ((key === ' ' || keyCode === 32) && estadoAnimacion === 2) {
    estadoAnimacion = 3; 
    contadorSalto = 0; 
    sonidoSalto.stop(); 
    sonidoSalto.play(); // Suena una sola vez el salto
  }
  
  // C. Reiniciar con la tecla 'R' o 'r'
  if (key === 'r' || key === 'R') {
    estadoAnimacion = 2;
    posX = -100;
    contadorSalto = 0;
    frameCount = 0; 
  }
}

// 6. CONTROL DE MOUSE (Para que la música también arranque con un clic)
function mousePressed() {
  if (!miMusica.isPlaying()) {
    miMusica.loop();
    miMusica.setVolume(0.4);
  }
}
