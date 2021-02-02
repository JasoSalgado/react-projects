// Prototypes
function Tarea( nombre, urgencia ) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Agregando el prototype que nos permite atar ciertas funciones a un prototipo
Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una priorirdad de ${this.urgencia}`
};

// Creando una nueva tarea
const tarea = new Tarea('Aprender JavaScript y React.Js', 'Súper urgente');
console.log(tarea);
console.log(tarea.mostrarInformacionTarea());
const tarea2 = new Tarea('Aprender JavaScript en el lado del Backend', 'Súper urgente');
console.log(tarea2);
console.log(tarea.mostrarInformacionTarea());
const tarea3 = new Tarea('Aprender Inglés', 'Súper urgente');
console.log(tarea3);
console.log(tarea.mostrarInformacionTarea());

// Creando otra función
function Persona( nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.mostrarInformacionPersona = function() {
    return `El nombre de la persona es: ${this.nombre} y lo conforma con el apellido: ${this.apellido}`;
}

const persona1 = new Persona('Jaso', 'Salgado');
console.log(persona1);
console.log(persona1.mostrarInformacionPersona());

// Creando otra función y prototipo
function Autos( marca, tipo ) {
    this.marca = marca;
    this.tipo = tipo;
}
Autos.prototype.mostrarInformacionAuto = function() {
    return `La marca del auto es: ${this.marca} y el tipo es: ${this.tipo}`;
}
const auto1 = new Autos('Volkswagen', 'Vento 4 puertas');
console.log(auto1);
console.log(auto1.mostrarInformacionAuto());

// Creando otra función y prototipo
function EquiposFutbol( nombreEquipo, numeroJugadores) {
    this.nombreEquipo = nombreEquipo;
    this.numeroJugadores = numeroJugadores;
}
EquiposFutbol.prototype.mostrarInfoEquipo = function() {
    return `El nombre del equipo es: ${this.nombreEquipo} y está constituido por ${this.numeroJugadores} jugadores`;
}
const equipo1 = new EquiposFutbol('Real Madrid', 22);
console.log(equipo1);
console.log(equipo1.mostrarInfoEquipo());

// Creando otra función y prototipo
function CursosPlatzi( nombreCurso, nombreProfesor ) {
    this.nombreCurso = nombreCurso;
    this.nombreProfesor = nombreProfesor;
}
CursosPlatzi.prototype.mostrarInfoCursosPlatzi = function() {
    return `Los cursos de Platzi son: ${this.nombreCurso} y los profesores son: ${this.nombreProfesor}`;
}
const curso1 = new CursosPlatzi('JavasCript', 'Hoffman');
const curso2 = new CursosPlatzi('React', 'Leonidas');
console.log(curso1);
console.log(curso1.mostrarInfoCursosPlatzi());
console.log(curso2);
console.log(curso2.mostrarInfoCursosPlatzi());

