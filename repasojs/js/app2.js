const contenedorApp2 = document.querySelector('#app2');

let html2 = `
    <h1>Template string en JavaScript</h1>
    <h2>Se declara un let, se le agregar un nombre y dentro de comillas invertidas se agrega todo el código que se quiere presentar en el DOM</h2>
    <p>Ejemplo</p>
    <ul>
        <li>const contenedorApp2 = document.querySelector('#app2')</li>
        <li>let html2</li>
        <li>dentro de html2 en comillas invertidas agregamos el código</li>
        <li>para presentar el código en pantalla, fuera de las comillas y el ; lo presentamos mandando llamar al contenedorApp2.innerHTML = html2; </li>
    </ul>
`;

contenedorApp2.innerHTML = html2;

const contenedorApp3 = document.querySelector('#app3');
    let html3 = `
        <h2>Esto es una prueba del contenedorApp3</h2>
    `;

    contenedorApp3.innerHTML = html3;

// Concatenar Javascript
const nombreH = 'Jorge';
const apellidoH = 'Salgado';
const nombreM = 'Berenice';
const apellidoM = 'Álvarez';

console.log(`${nombreH} ${apellidoH} y ${nombreM} ${apellidoM} son novios`);

// Array en Javascript
const personas = [
    hombre = 'Arturo', 
    edadH = 34, 
    mujer = 'Berenice',
    edadM = 30,
];

console.log(hombre, edadH, mujer, edadM);

// Template string con el ID nombre
const nombres = document.querySelector('#nombres');
    let mostrarNombres = `
        <h3>Trayendo datos desde un array en Javascript</h3>
        <p>${hombre} ${edadH}</p>
        <p>${mujer} ${edadM}</p>
        <p>${personas}</p>
        <p>${nombreH} ${apellidoH} y ${nombreM} ${apellidoM} son novios</p>
        <p>${html}</p>
        
    `;

    nombres.innerHTML = mostrarNombres;