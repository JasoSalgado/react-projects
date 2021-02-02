// Creando una función FUNCTION DECLARATION
function saludar( nombre ){
    console.log('Bienvenido ' + nombre);
}

saludar('Jaso');

// FUNCTION EXPRESSION USED IN REACT
const cliente = function( nombreDelCliente ) {
    console.log('Mostrando los datos del cliente: ' + nombreDelCliente);
}

cliente('Jaso Salgado');

// Pasando parámetros por Default con FUNCTION DECLARATION
function actividad(nombre, actividad) {
    console.log(`${nombre} está ${actividad}`);
}
actividad('Jorge', 'corriendo');

// Pasando parámetros por Default con FUNCTION EXPRESSIONS
const actividad2 = function(nombre = 'Jorge Ordoñez', actividad = 'jugando fútbol') {
    console.log(`${nombre} está ${actividad} en este momento`);
}
actividad2();