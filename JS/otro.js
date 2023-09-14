let dropdown;

function setup() {
  createCanvas(400, 200);
  
  // Crea el ComboBox y agrega opciones
  dropdown = createSelect();
  dropdown.position(10, 10);
  dropdown.option('Opción 1');
  dropdown.option('Opción 2');
  dropdown.option('Opción 3');
  dropdown.option('Opción 4');
  
  // Configura una función para manejar el cambio de selección
  dropdown.changed(mySelectEvent);
}

function draw() {
  background(220);
  // Muestra el valor seleccionado
  textSize(16);
  text(`Selección: ${dropdown.value()}`, 10, 50);
}

function mySelectEvent() {
  // Esta función se ejecutará cuando cambies la selección en el ComboBox
  let selectedOption = dropdown.value();
  print(`Seleccionaste: ${selectedOption}`);
}
