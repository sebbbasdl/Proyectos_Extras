
let buttonState1 = false; // Estado inicial del primer botón (apagado)
let buttonState2 = false; // Estado inicial del segundo botón (apagado)
let button1, button2; // Declarar las variables de los botones para que sean globales

//--Variables para grafica

let xOffset = 1500; // Controla la posición X de la gráfica
let yOffset = 1050; // Controla la posición Y de la gráfica
let escala = 0.4;   // Controla la escala de la gráfica




function setup() {
  createCanvas(975, 700); // Ajusta el tamaño del canvas según tus necesidades
  textSize(16);
  
  button2 = createButton("OFF"); // Crear el segundo botón con etiqueta "OFF"
  button1 = createButton("OFF"); // Crear el primer botón con etiqueta "OFF"
  let fechas = ['10-09-2023', '10-10-2023', '10-11-2023', '10-12-2023'];
  
  customDropdown = createCustomDropdown(400,100,fechas)  
  customDropdown.changed(mySelectEvent);
  customDropdown2 = createCustomDropdown(600,100,fechas)  
  customDropdown2.changed(mySelectEvent);
}

function draw() {
   //------------------------BOTONES-------------------------------
   

   let buttonX1 = 200;
   let buttonY1 = 130;
   let buttonSize = 50;
   
   button1.position(buttonX1 - buttonSize / 2, buttonY1 - buttonSize / 2);
   button1.size(buttonSize, buttonSize);
   button1.mousePressed(toggleButton1); // Asociar la función toggleButton1 al evento click del primer botón
 
   // Crear el círculo del segundo botón
   let buttonX2 = 200;
   let buttonY2 = 268;
   
   button2.position(buttonX2 - buttonSize / 2, buttonY2 - buttonSize / 2);
   button2.size(buttonSize, buttonSize);
   button2.mousePressed(toggleButton2); // Asociar la función toggleButton2 al evento click del segundo botón



  background(220);
  
  fill("black")
  textStyle(BOLDITALIC)
  textSize(25)
  text("GRUPO 5", 880,50)
  textStyle(NORMAL)
  textSize(17)
  fill("black")
  textStyle(BOLDITALIC)
  text("NOTIFICACIONES", 160,50)
  textStyle(NORMAL)
  textSize(20)
  textStyle(BOLDITALIC)
  text("REGISTRO DE CAIDAS", 640,300)
  textStyle(NORMAL)
  textSize(15)
  textStyle(BOLDITALIC)
  text("Fecha inicio:", 380,75)
  textStyle(NORMAL)
  textStyle(BOLDITALIC)
  text("Fecha final:", 580,75)
  textStyle(NORMAL)



  fill("black");
  textSize(12); // Tamaño del texto
  textStyle(BOLD); // Negrita
  text("Alerta Sonido : ", 75, 130)
  text("Alerta LED :", 75, 268)
  textStyle(NORMAL)
  // Dibujar el círculo del primer botón en función de su estado
  if (buttonState1) {
    fill(0, 255, 0); // Verde si está encendido
  } else {
    fill(150); // Gris si está apagado
  }
  rect(175, 110, 50, 50); // Cuadrado del primer botón
  fill(0); // Color del texto (negro)

  // Dibujar el círculo del segundo botón en función de su estado
  if (buttonState2) {
    fill(0, 255, 0); // Verde si está encendido
  } else {
    fill(150); // Gris si está apagado
  }
  rect(175, 248, 50, 50); // Cuadrado del segundo botón
  fill(0); // Color del texto (negro)


  //----------------------------------GRAFICA-------------------
  // Define los puntos relativos a xOffset, yOffset y escala
  let curvas = [
    ["10:00 AM"],
    ["11:30 AM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["11:30 AM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["11:30 AM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    ["1:00 PM"],
    
  ];
  
  
  generarGrafica(980,  900, curvas);
  
  
  //---Cuadro blanco
  drawWhiteRectangle(10, 20, 300, 325,50); // botones
  drawWhiteRectangle(320, 260, 640, 405,50); // grafica
  drawWhiteRectangle(10, 365, 300, 300,50); ; // hexagono

  //---Hexagono----
  drawHexagonWithNumber(160, 540, 100, 42);
 
  //---Combo box para fechas
  textSize(12)
  fill("black")
  textStyle(BOLDITALIC)
  text(`Seleccionaste: ${customDropdown.value()}`, 460, 150);
  text(`Seleccionaste: ${customDropdown2.value()}`, 660, 150);
  textStyle(NORMAL)

}


function toggleButton1() {
  buttonState1 = !buttonState1; // Cambiar el estado del primer botón al hacer clic
  button1.html(buttonState1 ? "ON" : "OFF"); // Cambiar el texto del primer botón
}

function toggleButton2() {
  buttonState2 = !buttonState2; // Cambiar el estado del segundo botón al hacer clic
  button2.html(buttonState2 ? "ON" : "OFF"); // Cambiar el texto del segundo botón
}



// Funcion Cuadro Blanco:
function drawWhiteRectangle(x, y, width, height,  alpha) {
  let c = color(255, 255, 255, alpha); // Define un color blanco con un valor alfa
  fill(c); // Establece el color de relleno con el color definido
  rect(x, y, width, height); // Dibuja el cuadro transparente en la posición (x, y) con las dimensiones especificadas

}

// Funcion Hexagono:
function drawHexagonWithNumber(x, y, radius, number) {
  textSize(17)
  fill("black")
  textStyle(BOLDITALIC)
  text("NUMERO DE ALERTAS", 160,400)
  textStyle(NORMAL)
  strokeWeight(1);
  fill(150, 0, 0);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let xOffset = radius * cos(angle);
    let yOffset = radius * sin(angle);
    vertex(x + xOffset, y + yOffset);
  }
  endShape(CLOSE);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text(number, x, y);
}

// Funcion Grafica :

function generarGrafica(x, y, curvas) {
  
  let xOffset = x; // Posición en X
  let yOffset = y; // Posición en Y
  let escala = 0.4; // Escala (ajusta según tus necesidades)
  
  let puntosRojos = [];
  let cantidadCurvas = curvas.length
  
  
  var xp1= 1/cantidadCurvas*5.25
  var yp1= 350
  var xp2= 119/cantidadCurvas*5.25
  var yp2= -200
  var xp3= 238/cantidadCurvas*5.25
  var yp3= 350
  var y_tiempo=380
  text("1",-30+xOffset*escala ,30+yOffset*escala )
  for (let i = 0; i < cantidadCurvas; i++) {
    // Define los puntos relativos a xOffset, yOffset y escala
    let p1 = { x: (xp1 + xOffset) * escala, y: (yp1 + yOffset) * escala };
    let p2 = { x: (xp2 + xOffset) * escala, y: (yp2 + yOffset) * escala };
    let p3 = { x: (xp3 + xOffset) * escala, y: (yp3 + yOffset) * escala };
    stroke(0, 0, 255); // Establece el color de trazo en azul (RGB)
    line((-85+xp2 + xOffset) * escala, 30+yOffset*escala, 905, 30+yOffset*escala);
    noStroke()
    stroke(0);
    fill("black");
    textSize(12*(1/cantidadCurvas*4.75)); // Tamaño del texto
    textStyle(BOLD); // Negrita
    text(curvas[i][0], p2.x, (y_tiempo + yOffset) * escala)
    textSize(12)
    
    textStyle(NORMAL)
    
    
    noFill();
    beginShape();
    vertex(p1.x, p1.y);
    quadraticVertex(p2.x, p2.y, p3.x, p3.y);
    endShape();

    fill("red");
    circle(p1.x, p1.y, 10 * escala);
    circle(p3.x, p3.y, 10 * escala);

    if (i === 0) {
      puntosRojos.push(p1);
    }

    puntosRojos.push(p3);

    // Ajusta xOffset para la siguiente curva
    xOffset += (590/cantidadCurvas*5.25) * escala;
  }

  // Dibuja el punto azul al principio
  fill("blue");
  circle(puntosRojos[0].x, puntosRojos[0].y, 10 * escala);

  // Dibuja los puntos rojos restantes
  fill("red");
  for (let i = 1; i < puntosRojos.length; i++) {
    circle(puntosRojos[i].x, puntosRojos[i].y, 10 * escala);
  }

  // Dibuja los ejes X e Y con ajuste de posición y escala
  let xEjeX1 = (0 + x) * escala;
  let xEjeX2 = (width + x+300) * escala;
  let yEjeX = (height / 2 + y) * escala;

  let xEjeY = (x) * escala; // Mueva la línea vertical a la izquierda
  let yEjeY1 = (0 + y) * escala;
  let yEjeY2 = (height + y) * escala;

  
  line(xEjeX1, yEjeX, xEjeX2, yEjeX);
  line(xEjeY, yEjeY1, xEjeY, yEjeY2);
   
}



function createCustomDropdown(x, y, opciones) {
  let dropdown = createSelect();
  dropdown.position(x, y);
  for (let opcion of opciones) {
    dropdown.option(opcion);
  }
  return dropdown;
}

function mySelectEvent() {
  // Esta función se ejecutará cuando cambies la selección en el ComboBox
  let selectedOption = customDropdown.value();
  print(`Seleccionaste: ${selectedOption}`);
}

function mouseDragged() {
  // Permite arrastrar la gráfica con el mouse
  xOffset += mouseX - pmouseX;
  yOffset += mouseY - pmouseY;
}


 
  