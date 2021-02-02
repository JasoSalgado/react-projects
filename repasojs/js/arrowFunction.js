// Manera extendida de escribir las Arrow Function
let viajando = function( destino ) {
    return `Viajando al ${destino}`;
}
// Creamos una variable en la cual se va a guarda el destino
let viaje;

viaje = viajando('Londres');

console.log(viaje);

// Simplifcando el código anterior con Arrow Function
let viajando2 = destino => `Viajando al ${ destino }`;

let viaje2;
viaje2 = viajando2('Morelia');
console.log(viaje2);


// Practicando las arrow functions creando el nombre de un equipo y de un jugador
let equipo = ( nombreEquipo, nombreJugador ) => `El nombre del equipo es: ${nombreEquipo} y del jugador es: ${nombreJugador}`;

let nEquipo;
nEquipo = equipo('Palomas Ticas', 'Jaso Salgado');

console.log(nEquipo);

// Practicando las arrow functions creando nombre de una persona, licenciatura, profesion, id
let generales = ( persona, licenciatura, profesion, id ) => `Los generales son: nombre: ${persona} grado académico: ${licenciatura}, se desempeña como: ${profesion} y su INE es: ${id}`;

let listaGenerales;
listaGenerales = generales( 'Jorge Arturo Salgado Ordoñez', 
                            'Licenciado en la Enseñanza del Inglés', 
                            'Traductor y Desarrollador Web', 
                             123456789);

console.log(listaGenerales);

// Más Arrow Function
let razasCaninas = ( perroChico, perroMediano, perroGrande ) => `El nombre de la raza de los perros pequeños es: ${perroChico}, la de los medianos es: ${perroMediano} y la de los perros grandes es: ${perroGrande}`;

let distintasRazas = razasCaninas( 'Chihuahueño',
                                    'Salchicha',
                                    'Boxer' );
console.log(distintasRazas);

// Practicando y entendiendo
let materias = ( primaria, secundaria, preparatoria, licenciatura ) => `Materias principales: ${primaria}, ${secundaria}, ${preparatoria} y ${licenciatura}`;

let listaMaterias = materias( 'matemáticas', 'historia', 'psicología', 'Ingeniería en Sistemas Computacionales' );
console.log(listaMaterias);

// Práctica
let listaProgramas = ( programa1, programa2, programa3, programa4 ) => `Los programas que sé utilizar son: ${programa1}, ${programa2}, ${programa3}, ${programa4}`;

let desplegarListaProgramas = listaProgramas( 'HTML5', 'CSS3', 'REACT', 'REDUX' );
console.log(desplegarListaProgramas);