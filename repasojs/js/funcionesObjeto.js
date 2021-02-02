// Método o funciones en un objeto
const persona = {
    nombre: 'Jaso',
    apellido: 'Salgado',
    profesion: 'Desarrollador Web',
    edad: 35,
    segundaProfesion: 'Traductor',
    mostrarInformacion() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}, mi edad es ${this.edad} años y soy ${this.profesion} y ${this.segundaProfesion}`);
    }
} 
persona.mostrarInformacion();

// Otro método o función en un objeto
const grupoPersonas = {
    etnias: ['Morenos', 'Negros', 'Blancos'],
    edades: [18, 20,30],
    continentes: ['Africa', ' Antartida', ' America', ' Asia', ' Europa'],
    mostrasGrupoPersonas() {
        console.log(`Las etnias son ${this.etnias}, así mismo las edades son ${this.edades} y sus respectivos contienentes son ${this.continentes}`);
    }
}
grupoPersonas.mostrasGrupoPersonas();