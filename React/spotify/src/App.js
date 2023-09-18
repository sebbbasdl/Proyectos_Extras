import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

let buttonState1 = false;
let buttonState2 = false;
let button1, button2; // Declarar las variables de los botones para que sean globales

function Sketch(p) {
  let customDropdown, customDropdown2;
  let xOffset = 1500;
  let yOffset = 1050;
  let escala = 0.3;
  let fechas = ['10-09-2023', '10-10-2023', '10-11-2023', '10-12-2023'];

  p.setup = () => {
    p.createCanvas(975, 700);
    p.textSize(16);

    button2 = p.createButton("OFF"); // Crear el segundo botón con etiqueta "OFF"
    button1 = p.createButton("OFF"); // Crear el primer botón con etiqueta "OFF"

    customDropdown = createCustomDropdown(p, 400, 100, fechas);
    customDropdown.changed(mySelectEvent);
    customDropdown2 = createCustomDropdown(p, 600, 100, fechas);
    customDropdown2.changed(mySelectEvent);
  };

  p.draw = () => {
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
    p.background(220);

    p.fill("black");
    p.textStyle(p.BOLDITALIC);
    p.textSize(25);
    p.text("GRUPO 5", 880, 50);
    p.textStyle(p.NORMAL);
    p.textSize(17);
    p.fill("black");
    p.textStyle(p.BOLDITALIC);
    p.text("NOTIFICACIONES", 160, 50);
    p.textStyle(p.NORMAL);
    p.textSize(20);
    p.textStyle(p.BOLDITALIC);
    p.text("REGISTRO DE CAIDAS", 640, 300);
    p.textStyle(p.NORMAL);
    p.textSize(15);
    p.textStyle(p.BOLDITALIC);
    p.text("Fecha inicio:", 380, 75);
    p.textStyle(p.NORMAL);
    p.textStyle(p.BOLDITALIC);
    p.text("Fecha final:", 580, 75);
    p.textStyle(p.NORMAL);

    p.fill("black");
    p.textSize(12);
    p.textStyle(p.BOLD);
    p.text("Alerta Sonido : ", 75, 130);
    p.text("Alerta LED :", 75, 268);
    p.textStyle(p.NORMAL);

    if (buttonState1) {
      p.fill(0, 255, 0);
    } else {
      p.fill(150);
    }
    p.rect(175, 110, 50, 50);

    if (buttonState2) {
      p.fill(0, 255, 0);
    } else {
      p.fill(150);
    }
    p.rect(175, 248, 50, 50);

    p.textSize(12);
    p.fill("black");
    p.textStyle(p.BOLDITALIC);
    p.text(`Seleccionaste: ${customDropdown.value()}`, 460, 150);
    p.text(`Seleccionaste: ${customDropdown2.value()}`, 660, 150);
    p.textStyle(p.NORMAL);

    drawWhiteRectangle(p, 10, 20, 300, 325, 50);
    drawWhiteRectangle(p, 320, 260, 640, 405, 50);
    drawWhiteRectangle(p, 10, 365, 300, 300, 50);
    drawHexagonWithNumber(p, 160, 540, 100, 42);
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
  };

  function toggleButton1() {
    buttonState1 = !buttonState1;
    button1.html(buttonState1 ? "ON" : "OFF");
  }

  function toggleButton2() {
    buttonState2 = !buttonState2;
    button2.html(buttonState2 ? "ON" : "OFF");
  }

  function drawWhiteRectangle(p, x, y, width, height, alpha) {
    let c = p.color(255, 255, 255, alpha);
    p.fill(c);
    p.rect(x, y, width, height);
  }

  function drawHexagonWithNumber(p, x, y, radius, number) {
    p.textSize(17);
    p.fill("black");
    p.textStyle(p.BOLDITALIC);
    p.text("NUMERO DE ALERTAS", 160, 400);
    p.textStyle(p.NORMAL);
    p.strokeWeight(1);
    p.fill(150, 0, 0);
    p.beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = p.TWO_PI / 6 * i;
      let xOffset = radius * p.cos(angle);
      let yOffset = radius * p.sin(angle);
      p.vertex(x + xOffset, y + yOffset);
    }
    p.endShape(p.CLOSE);

    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(24);
    p.text(number, x, y);
  }

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
  p.text("1",-30+xOffset*escala ,30+yOffset*escala )
  for (let i = 0; i < cantidadCurvas; i++) {
    // Define los puntos relativos a xOffset, yOffset y escala
    let p1 = { x: (xp1 + xOffset) * escala, y: (yp1 + yOffset) * escala };
    let p2 = { x: (xp2 + xOffset) * escala, y: (yp2 + yOffset) * escala };
    let p3 = { x: (xp3 + xOffset) * escala, y: (yp3 + yOffset) * escala };
    p.stroke(0, 0, 255); // Establece el color de trazo en azul (RGB)
    p.line((-85+xp2 + xOffset) * escala, 30+yOffset*escala, 905, 30+yOffset*escala);
    p.noStroke()
    p.stroke(0);
    p.fill("black");
    p.textSize(12*(1/cantidadCurvas*4.75)); // Tamaño del texto
    p.textStyle(p.BOLD); // Negrita
    p.text(curvas[i][0], p2.x, (y_tiempo + yOffset) * escala)
    p.textSize(12)
    
    p.textStyle(p.NORMAL)
    
    
    p.noFill();
    p.beginShape();
    p.vertex(p1.x, p1.y);
    p.quadraticVertex(p2.x, p2.y, p3.x, p3.y);
    p.endShape();

    p.fill("red");
    p.circle(p1.x, p1.y, 10 * escala);
    p.circle(p3.x, p3.y, 10 * escala);

    if (i === 0) {
      puntosRojos.push(p1);
    }

    puntosRojos.push(p3);

    // Ajusta xOffset para la siguiente curva
    xOffset += (590/cantidadCurvas*5.25) * escala;
  }

  // Dibuja el punto azul al principio
  p.fill("blue");
  p.circle(puntosRojos[0].x, puntosRojos[0].y, 10 * escala);

  // Dibuja los puntos rojos restantes
  p.fill("red");
  for (let i = 1; i < puntosRojos.length; i++) {
    p.circle(puntosRojos[i].x, puntosRojos[i].y, 10 * escala);
  }

  // Dibuja los ejes X e Y con ajuste de posición y escala
  let xEjeX1 = (0 + x) * escala;
  let xEjeX2 = (p.width + x+300) * escala;
  let yEjeX = (p.height / 2 + y) * escala;

  let xEjeY = (x) * escala; // Mueva la línea vertical a la izquierda
  let yEjeY1 = (0 + y) * escala;
  let yEjeY2 = (p.height + y) * escala;

  
  p.line(xEjeX1, yEjeX, xEjeX2, yEjeX);
  p.line(xEjeY, yEjeY1, xEjeY, yEjeY2);
  }

  function createCustomDropdown(p, x, y, opciones) {
    let dropdown = p.createSelect();
    dropdown.position(x, y);
    for (let opcion of opciones) {
      dropdown.option(opcion);
    }
    return dropdown;
  }

  function mySelectEvent() {
    // Esta función se ejecutará cuando cambies la selección en el ComboBox
    let selectedOption = customDropdown.value();
    p.print(`Seleccionaste: ${selectedOption}`);
  }

  function mouseDragged() {
    xOffset += p.mouseX - p.pmouseX;
    yOffset += p.mouseY - p.pmouseY;
  }

}
function App() {
  return (
    <div className="App">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
}
export default App;
