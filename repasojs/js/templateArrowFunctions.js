
let misDatos = ( name, age, address ) => `${name}, ${age}, ${address}`;
let mostrarDatos = misDatos('Jaso Salgado', 34, 'Lomas de Hidalgo');

const practicaTemplatesArrow = document.querySelector('#templateArrowFunctions');
    let mostrarGenerales = `
    
    <h3>Practicing Template Strings and Arrow Functions</h3>
    <h4>${mostrarDatos}</h4>
    
    `;

practicaTemplatesArrow.innerHTML = mostrarGenerales;

// Practicando template string and arrow function

let misGenerales = ( nombre, apellido, domicilio, profesion, id, estadoCivil ) => `${nombre}, ${apellido}, ${domicilio}, ${profesion}, ${id}, ${estadoCivil}`;

let mostrarMisGenerales = misGenerales( 'Jorge', 'Salgado', 'Lomas de Hidalgo', 'Desarrollador Web', 23567713, 'Soltero' );
console.log(mostrarMisGenerales);

const contenedorMisGenerales = document.querySelector('#templateArrowFunctions2');
    let mostrarEnPantalla = `
        <h1>Mostrando en pantalla el uso de las Arrow Functions dentro de un Template String</h1>
        <h2>${mostrarMisGenerales}</h2>
    `;
contenedorMisGenerales.innerHTML = mostrarEnPantalla;

