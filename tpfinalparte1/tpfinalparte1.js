/* HOMERO Y LA TENTACIÓN
LAUTARO GUTIERREZ Y PAULINA MORETTI
COMISION 3 (DAVID BEDOIAN)
https://www.figma.com/board/6ZyJuLorLpMHLnROmyltT9/TpfinalParte1?node-id=0-1&p=f&t=0pBzmbnS1nGmFYmT-0 (LINK AL USERFLOW/DIAGRAMA DE FLUJO)
https://youtu.be/3pMXpdoFrSA?si=wrcE_C4qEh1O_ZO4 (link al youtube) */



let pantallas = [];
let textos = [];
let sonidos = [];
let transiciones = [];
let tipografia;
let mensaje;
let contador;
let ancho, alto, size, x, y;
let estado = 0;
let tiempo = 0;
let cursorImg;

function botones(x_, y_, w_, h_) {
  return mouseX > x_ - w_/2 && mouseX < x_ + w_/2 &&
         mouseY > y_ - h_/2 && mouseY < y_ + h_/2;
}

function botonCambio(x_, y_, w_, h_, nuevoEstado) {
  if (botones(x_, y_, w_, h_)) {
    estado = nuevoEstado;
    contador = 0;
    tiempo = 0;
  }
}

function reproducirEfecto() {
  if (sonidos[1] && sonidos[1].isLoaded()) {
    sonidos[1].stop();
    sonidos[1].play();
  }
}

function preload() {
  cursorImg = loadImage("data/cursor/cursor.png");

  for (let i = 0; i < 29; i++) {
    pantallas[i] = loadImage("data/pantallas/" + nf(i, 3) + ".jpg");
  }

  tipografia = loadFont("data/tipografias/simpson.ttf");
  mensaje = loadFont("data/tipografias/mensaje.ttf");

  for (let j = 0; j < 3; j++) {
    textos[j] = loadImage("data/textos/" + nf(j, 2) + ".png");
  }
  for (let k = 0; k < 17; k++) {
    transiciones[k] = loadImage("data/transicion/" + nf(k, 4) + ".png");
  }
  for (let l = 0; l < 3; l++) {
    sonidos[l] = loadSound("data/sonidos/" + nf(l, 1) + ".mp3");
  }
}

function setup() {
  createCanvas(800, 450);
  noCursor();
  contador = 0;
}

const escenasDraw = {
  0: menu, 1: creditos, 2: pantallaUno, 3: pantallaDos, 4: pantallaTres,
  5: pantallaCuatro, 6: pantallaCinco, 7: pantallaSeis, 8: pantallaSiete,
  9: pantallaOcho, 10: pantallaNueve, 11: pantallaDiez, 12: pantallaOnce,
  13: pantallaDoce, 14: pantallaTrece, 15: pantallaCatorce, 16: pantallaQuince,
  17: pantallaDieciseis, 18: pantallaDiecisiete, 19: pantallaDieciocho,
  20: pantallaHablarMindy1, 21: pantallaHablarMindy2, 22: pantallaHablarMindy3,
  23: pantallaInvitacionCena, 24: pantallaFinalBebedor, 25: pantallaEsperarMindy1,
  26: pantallaEsperarMindy2, 27: pantallaEsperarMindy3, 28: pantallaFinalEsperarMindy,
  29: pantallaDiecinueve, 30: pantallaVeinte, 31: pantallaVeintiuno, 32: pantallaVeintidos,
  33: pantallaHablarMindy4, 34: pantallaHablarMindy5, 35: pantallaInvitacionCasa,
  36: pantallaHablarMindy6, 37: pantallaHablarMindy7, 38: pantallaHablarMindy8,
  39: pantallaFinalInfiel, 40: pantallaFinalFiel, 41: pantallaArrepentido
};

function draw() {
  if (escenasDraw[estado]) {
    escenasDraw[estado]();
  }
  image(cursorImg, mouseX, mouseY, 64, 64);
}

function mousePressed() {
  if (estado == 0) {
    // Menú principal
    botonCambio(width/2, 300, 200, 40, 2); // continuar
    botonCambio(width/2, 350, 200, 40, 1); // créditos

    if (botones(width/2, 300, 200, 40)) {
      if (sonidos[0].isLoaded() && !sonidos[0].isPlaying()) {
        sonidos[0].setVolume(0.2);
        sonidos[0].loop();
      }
      reproducirEfecto();
    }
    if (botones(width/2, 350, 200, 40)) {
      if (sonidos[0].isPlaying()) sonidos[0].stop();
      if (sonidos[2].isLoaded() && !sonidos[2].isPlaying()) {
        sonidos[2].setVolume(0.5);
        sonidos[2].loop();
      }
      reproducirEfecto();
    }
  } else if (estado == 1) {
    botonCambio(700, 400, 200, 40, 0); // volver al menú
    if (botones(700, 400, 200, 40)) {
      if (sonidos[2].isPlaying()) sonidos[2].stop();
      reproducirEfecto();
    }
  } else if (estado == 3) {
    botonCambio(690, 430, 200, 40, 4);
  } else if (estado == 4) {
    botonCambio(690, 430, 200, 40, 5);
  } else if (estado == 5) {
    botonCambio(690, 430, 200, 40, 6);
  } else if (estado == 6) {
    botonCambio(690, 430, 200, 40, 7);
  } else if (estado == 7) {
    botonCambio(690, 430, 200, 40, 8);
  } else if (estado == 8) {
    botonCambio(690, 430, 200, 40, 9);
  } else if (estado == 9) {
    botonCambio(690, 430, 200, 40, 10);
  } else if (estado == 10) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 11;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 12;
      reproducirEfecto();
    }
  } else if (estado == 11) {
    botonCambio(690, 430, 200, 40, 13);
  } else if (estado == 12) {
    botonCambio(690, 430, 200, 40, 14);
  } else if (estado == 13) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 15;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 16;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 14) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 20; // Hablarle a Mindy
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
    if (botones(580, 350, 300, 100)) {
      estado = 25; // Esperar que Mindy lo vea
      contador = 0;
      tiempo = 0;
    }
  } else if (estado == 15) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 16) {
    botonCambio(690, 430, 200, 40, 17);
  } else if (estado == 17) {
    botonCambio(690, 430, 200, 40, 18);
  } else if (estado == 18) {
    botonCambio(690, 430, 200, 40, 19);
  } else if (estado == 19) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 14;
      contador = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 29;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 29) {
    botonCambio(690, 430, 200, 40, 30);
  } else if (estado == 30) {
    // Pregunta con dos opciones
    if (botones(220, 350, 300, 100)) {
      estado = 31;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 24;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    }
  } else if (estado == 31) {
    botonCambio(690, 430, 200, 40, 32);
  } else if (estado == 32) {
    botonCambio(690, 430, 200, 40, 25);
  } else if (estado == 24) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 20) {
    botonCambio(690, 430, 200, 40, 21);
  } else if (estado == 21) {
    botonCambio(690, 430, 200, 40, 22);
  } else if (estado == 22) {
    botonCambio(690, 430, 200, 40, 23);
  } else if (estado == 23) {
    if (botones(220, 350, 300, 100)) {
      estado = 33;
      contador = 0;
      tiempo = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 15;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 34) {
    botonCambio(690, 430, 200, 40, 35);
  } else if (estado == 35) {
    if (botones(220, 350, 300, 100)) {
      estado = 36;
      contador = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 41;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 41) {
    botonCambio(690, 430, 200, 40, 0);
  }else if (estado == 36) {
    botonCambio(690, 430, 200, 40, 37);
  } else if (estado == 37) {
    botonCambio(690, 430, 200, 40, 38);
  } else if (estado == 38) {
    if (botones(220, 350, 300, 100)) {
      estado = 39;
      contador = 0;
      reproducirEfecto();
    } else if (botones(580, 350, 300, 100)) {
      estado = 40;
      contador = 0;
      reproducirEfecto();
    }
  } else if (estado == 39) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 40) {
    botonCambio(690, 430, 200, 40, 0);
  } else if (estado == 25) {
    botonCambio(690, 430, 200, 40, 26);
  } else if (estado == 26) {
    botonCambio(690, 430, 200, 40, 27);
  } else if (estado == 27) {
    botonCambio(690, 430, 200, 40, 28);
  } else if (estado == 28) {
    botonCambio(690, 430, 200, 40, 0);
  }
}


function keyPressed() {
  if (key === 'R' || key === 'r') {
    estado = 0; contador = 0; tiempo = 0;
    if (sonidos[0].isPlaying()) sonidos[0].stop();
  }
  if (key === 'S' || key === 's') {
    if (sonidos[0].isPlaying()) {
      sonidos[0].stop();
    } else {
      sonidos[0].setVolume(0.2); sonidos[0].loop();
    }
  }
}
