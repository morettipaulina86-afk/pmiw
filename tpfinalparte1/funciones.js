//funciones genericas

function mostrarEscena(imgIndex, textoMsg) {
  tiempo++;
  image(pantallas[imgIndex], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text(textoMsg, width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("continuar", 690, 430);
}

function mostrarDecision(imgIndex, pregunta, textoIzq, textoDer) {
  tiempo++;
  image(pantallas[imgIndex], -70, 0, width+150, height);
  image(textos[2], 200, -50, 450, 300);

  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(18);
  textFont("mensaje");
  text(pregunta, width/2 - 100, 100);
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);

  fill(botones(220, 350, 300, 100) ? 180 : 255);
  rect(220, 350, 300, 100, 20);

  fill(botones(580, 350, 300, 100) ? 180 : 255);
  rect(580, 350, 300, 100, 20);
  
  fill(0);
  noStroke();
  textSize(18);
  text(textoIzq, 140, 350);
  text(textoDer, 515, 350);
}

function mostrarFinal(imgIndex, mensajeFinal) {
  tiempo++;
  image(pantallas[imgIndex], -70, 0, width+150, height);
  image(textos[2], width/2 - 50, 300, 450, 200);
  
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("FIN.", width/2, 50);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  textFont("mensaje");
  text(mensajeFinal, width/2 + 10, 400);
  
  stroke(0);
  fill("#D1C32C");
  textSize(15);
  strokeWeight(3);
  text("regresar", 690, 430);
}


// pantallas

function menu() {
  image(pantallas[0], -50, -50, width+100, height+100);
  stroke(0);
  fill("#D1C32C");
  strokeWeight(10);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(tipografia);
  text("HOMERO Y LA TENTACION", width/2, 50);

  let opciones = ["PULSA PARA INICIAR", "CREDITOS"];
  ancho = 200;
  alto = 40;

  for (let i = 0; i < opciones.length; i++) {
    x = width/2;
    y = 300 + i * 50;
    size = 30;

    if (mouseX > x - ancho/2 && mouseX < x + ancho/2 && mouseY > y - alto/2 && mouseY < y + alto/2) {
      size = 38;
      fill((frameCount % 20) < 10 ? "#CBAB06" : "#897201");
    } else {
      fill("#897201");
    }
    textSize(size);
    text(opciones[i], x, y);
  }
}

function creditos() {
  contador++;
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(tipografia);
  text("CREDITOS", width/2, 450 - contador);

  let honores = ["DIRECTORES", "AUTORES", "PROGRAMADORES PRINCIPALES", "EQUIPO DE TRABAJO"];
  let nombres = ["Lautaro Gutierrez", "Paulina Moretti"];

  for (let i = 0; i < honores.length; i++) {
    let y = 550 - contador + i * 120; 
    fill("#897201");
    textSize(25);
    text(honores[i], width/2, y);

    for (let j = 0; j < nombres.length; j++) {
      fill(250);
      textSize(25);
      text(nombres[j], width/2, y + 50 + j * 30);
    }
  }

  fill(botones(700, 400, ancho, alto) ? ((frameCount % 20) < 10 ? "#CBAB06" : "#897201") : "#897201");
  textSize(25);
  text("VOLVER", 700, 400);
}

function pantallaUno() {
  tiempo++; 
  if (frameCount % 3 === 0 && contador < transiciones.length) contador++;
  image(pantallas[1], -50, 0, width+100, height);
  if (contador < transiciones.length) image(transiciones[contador], 0, 0, width, height);
  if (tiempo >= 60 * 1) {
    image(textos[2], width/2 + 20, -50, 400, 200);
    fill(0); noStroke(); textAlign(LEFT); textSize(15); textFont("mensaje");
    text("Un  dia  normal  en  la  planta  nuclear", 470, 50);
  } 
  if (tiempo >= 60 * 5) { estado = 3; tiempo = 0; contador = 0; }
}

// Pantallas narrativas simplificadas
function pantallaDos() { mostrarEscena(2, "son las  8pm y  acaba  de  finalizar  el turno  de  homero"); }
function pantallaTres() { mostrarEscena(3, "decide  pasar  por  la  cafeteria  para  hablar  con  sus  amigos"); }
function pantallaCuatro() { mostrarEscena(4, "y  se  encuentra  con  Mindy,  una  nueva  empleada  en  la  planta"); }
function pantallaCinco() { mostrarEscena(5, "¡ pero  en  ese  momento  ocurre  lo  peor !"); }
function pantallaSeis() { mostrarEscena(6, "¡ Homero  se  ve  tentado  por  la  nueva  !"); }
function pantallaSiete() { mostrarEscena(7, "aterrado  decide  irse..."); }
function pantallaOcho() { mostrarEscena(8, "pero  luego   lo  piensa  mejor"); }
function pantallaDiez() { mostrarEscena(9, "homero  sigue  preocupado,  no  sabe  en  que  pensar"); }
function pantallaOnce() { mostrarEscena(10, "homero  sin  estar  seguro  de  lo  que  hace  vuelve  al  trabajo"); }
function pantallaDieciseis() { mostrarEscena(13, "homero  busca  el  consejo  de  sus  amigos"); }
function pantallaDiecisiete() { mostrarEscena(14, "sus  amigos  le  recomiendan  hablar  con  Mindy"); }
function pantallaDiecinueve() { mostrarEscena(20, "homero  y  sus  amigos  quedan  totalmente  borrachos"); }
function pantallaVeintiuno() { mostrarEscena(21, "homero  estando  borracho  decide  ir  igual"); }
function pantallaVeintidos() { mostrarEscena(10, "No  sabe  como  acercarse  a  hablar  y  se  queda  paralizado"); }

function pantallaHablarMindy1() { mostrarEscena(10, "Homero  se  acerca  a  hablarle,  pero  tropieza  al  caminar"); }
function pantallaHablarMindy2() { mostrarEscena(16, "Mindy  se  rie  con   ternura  y   le  dice  que  ella  es  igual"); }
function pantallaHablarMindy3() { mostrarEscena(16, "A  Mindy  le  parece  buena  idea  invitarlo  a  cenar"); }
function pantallaHablarMindy5() { mostrarEscena(23, "despues  de  cenar  Mindy le  dice  a  homero  de  ir  a  su  casa"); }
function pantallaHablarMindy6() { mostrarEscena(25, "una  vez  en  la  casa  de  Mindy  las cosas  se  descontrolan"); }
function pantallaHablarMindy7() { mostrarEscena(26, "apunto  de  cometer  un  eror  homero  todavia  puede  decidir"); }

function pantallaEsperarMindy1() { mostrarEscena(17, "Homero  se  esconde  nervioso  detras  de  la  pared"); }
function pantallaEsperarMindy2() { mostrarEscena(18, "Pasa  tanto  tiempo  quieto  que  termina  durmiendose"); }
function pantallaEsperarMindy3() { mostrarEscena(19, "Mindy  se  va  sin  verlo  y  Homero  pierde  su  portunidad"); }


// Pantallas de decisiones simplificadas
function pantallaNueve() { mostrarDecision(8, "¿Que  debe  hacer  Homero?", "Volver  a   casa", "volver  al  trabajo"); }
function pantallaDoce() { mostrarDecision(9, "¿Que  debe  hacer  Homero?", "Quedarse  en   casa", "ir  a  la  taberna"); }
function pantallaTrece() { mostrarDecision(10, "¿Que  debe  hacer  Homero?", "hablarle  a  Mindy", "esperar"); }
function pantallaDieciocho() { mostrarDecision(14, "¿Que  debe  hacer  Homero?", "seguir el consejo", "beber  un  poco  mas"); }
function pantallaVeinte() { mostrarDecision(20, "¿Que  debe  hacer  Homero?", "ir  igual  al  trabajo", "olvidarse  de   todo"); }
function pantallaInvitacionCena() { mostrarDecision(16, "¿Que  debe  hacer  Homero?", "aceptar la cena", "volver a casa"); }
function pantallaInvitacionCasa() { mostrarDecision(23, "¿Que  debe  hacer  Homero?", "ir a su casa", "echarse  a  atras"); }
function pantallaHablarMindy8() { mostrarDecision(26, "¿Que  debe  hacer  Homero?", "ser infiel", "volver a casa"); }


// Pantallas con transiciones de tiempo
function pantallaQuince() {
  tiempo++; 
  if (frameCount % 3 === 0 && contador < transiciones.length) contador++;
  image(pantallas[12], -50, 0, width+100, height);
  if (contador < transiciones.length) image(transiciones[contador], 0, 0, width, height);
  if (tiempo >= 60 * 1) {
    image(textos[2], width/2 + 20, -50, 400, 200);
    fill(0); noStroke(); textAlign(LEFT); textSize(15); textFont("mensaje");
    text("Taberna de MOE'S", 470, 50);
  } 
  if (tiempo >= 60 * 3) { estado = 17; tiempo = 0; contador = 0; }
}

function pantallaHablarMindy4() {
  tiempo++; 
  if (frameCount % 3 === 0 && contador < transiciones.length) contador++;
  image(pantallas[22], -50, 0, width+100, height);
  if (contador < transiciones.length) image(transiciones[contador], 0, 0, width, height);
  if (tiempo >= 60 * 1) {
    image(textos[2], width/2 + 20, -50, 400, 200);
    fill(0); noStroke(); textAlign(LEFT); textSize(15); textFont("mensaje");
    text("MADAME CHAO'S", 470, 50);
  } 
  if (tiempo >= 60 * 3) { estado = 34; tiempo = 0; contador = 0; }
}


// Finales simplificados
function pantallaCatorce() { mostrarFinal(11, "Homero  decide  ser  feliz  y  quedarse  en  casa  con  su  familia"); }
function pantallaFinalBebedor() { mostrarFinal(15, "la verdad  de  la  vida  es  una  buena  Duff  fria"); }
function pantallaFinalInfiel() { mostrarFinal(27, "Homero  decide  ser  infiel  y  acostarse  con  Mindy"); }
function pantallaFinalFiel() { mostrarFinal(28, "Homero  decide  volver  con  Marge  y  ser  feliz"); }
function pantallaArrepentido() { mostrarFinal(24, "homero  se  arrepiente  de  todo  y  se  pone  a  beber"); }
function pantallaFinalEsperarMindy() { mostrarFinal(19, "Mindy  se  fue,  Homero  vuelve  a  casa"); }
