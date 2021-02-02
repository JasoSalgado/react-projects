// Arreglos, map y objetcs
const carrito = [ 'Producto 1', 'Producto 1', 'Producto 1' ];

console.log(carrito);

const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;

// otra forma de hacerlo con map se escribe en consola
// const carrito = [ 'Produ 1', 'Produ 1', 'Produ 1' ];
// carrito.map(produ => {
//     return 'El producto es ' + produ;
// });

// Objects keys //////////////////////////////////////////////////
// Funciona para saber si una propiedad existe
const persona = {
    nombre: 'Jorge',
    profesion: 'Desarrollador Web',
    edad: 35
}
console.log(Object.keys(persona));
