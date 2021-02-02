// Objeto dinamico con constructor
// Siempre se escriben con la letra inicial en mayúscula
// Toman un nombre y una urgencia

function Tarea( nombre, urgencia ) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea = new Tarea('Aprender JavaScript', 'Urgente');
const tarea2 = new Tarea('Aprender React.Js', 'Súper urgente');
const tarea3 = new Tarea('Aprender JavaScript en el Backend', 'Urgente');
const tarea4 = new Tarea('Aprender Inglés', 'Urgente');

console.log(tarea);
console.log(tarea.nombre);
console.log(tarea.urgencia);
console.log(tarea2);
console.log(tarea2.nombre);
console.log(tarea2.urgencia);
console.log(tarea3);
console.log(tarea3.nombre);
console.log(tarea3.urgencia);
console.log(tarea4);
console.log(tarea4.nombre);
console.log(tarea4.urgencia);