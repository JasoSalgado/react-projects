// const aprendiendo = 'nada';
// let constante;
// constante = 'puede variar o modificar su valor en cualquier momento';

// console.log(aprendiendo, constante);

// Scope
let aprendiendo = 'React';

if(aprendiendo) {
    let aprendiendo = 'Javascript';
    console.log('dentro del if aparece: ', aprendiendo);
}

console.log('Fuera del if aparece: ', aprendiendo);

// Template Strings
const nombre = 'Jaso';
const trabajo = 'Desarrollador Web';

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Usando querySelector y el ID app mostramos en pantalla
const contenedorApp = document.querySelector('#app');
let html = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>
    </ul>    
`;

contenedorApp.innerHTML = html;