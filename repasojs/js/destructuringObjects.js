// Destructuring objects
const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

let {nueva} = aprendiendoJS.version;
console.log(nueva);

// Creando un nuevo destructuring object 
const aprendiendoCodigo = {
    codigo: {
        primero: 'React',
        segundo: 'JavaScript',
        tercero: 'HTML',
        cuarto: 'CSS'
    }
}

let { primero } = aprendiendoCodigo.codigo;
console.log(primero);
let { segundo } = aprendiendoCodigo.codigo;
console.log(segundo);
let { tercero } = aprendiendoCodigo.codigo;
console.log(tercero);
let { cuarto } = aprendiendoCodigo.codigo;
console.log(cuarto);