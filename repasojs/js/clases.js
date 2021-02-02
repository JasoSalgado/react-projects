// Escribir clases
// Todas las clases tienen una mayúscula
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Sketch', 'Media');
let tarea4 = new Tarea('Aprender Lettering', 'Media');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

// Otro ejemplo
class Diseño {
    constructor(nombre, programa) {
        this.nombre = nombre;
        this.programa = programa;
    }
    mostrarInformacion() {
        return `El nombre es ${this.nombre} el programa es ${this.programa}`
    }
}

let diseño1 = new Diseño('Frontend', 'HTML5');
let diseño2 = new Diseño('Backend', 'Python');
let diseño3 = new Diseño('UI', 'Sketch');
let diseño4 = new Diseño('Edición', 'Photoshop');

console.log(diseño1.mostrarInformacion());
console.log(diseño2.mostrarInformacion());
console.log(diseño3.mostrarInformacion());
console.log(diseño4.mostrarInformacion());

// Otro ejemplo
class Personas {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    mostrarDatosPersonas() {
        console.log(`El nombre de la persona es: ${this.nombre}, su apellido es: ${this.apellido} y su edad: ${this.edad}`);
    }
}
class UsandoExtends extends Personas {
    constructor(nombre, apellido, edad, domicilio) {
        super(nombre, apellido, edad);
        this.domicilio = domicilio;
    }
    mostrarDatosUsandoExtend(){
        super.mostrarDatosPersonas();
        console.log(`Usando extends y mostrando los datos que heredó mi clase`) ;
    }
}

let usandoExtend1 = new UsandoExtends('Christian', 'Garcia', 35, 'Lomas de Hidalgo');
console.log(usandoExtend1.mostrarDatosUsandoExtend);


let persona1 = new Personas('Jaso', 'Salgado', 35);
let persona2 = new Personas('Jorge', 'Ordoñez', 30);
let persona3 = new Personas('Arturo', 'Salgado', 22);
let persona4 = new Personas('Christian', 'García', 35);
let persona5 = new Personas('Gerardo', 'Lugo', 35);

console.log(persona1.mostrarDatosPersonas());
console.log(persona2.mostrarDatosPersonas());
console.log(persona3.mostrarDatosPersonas());
console.log(persona4.mostrarDatosPersonas());
console.log(persona5.mostrarDatosPersonas());

// Heredando
class Traducciones {
    constructor(legales, costo) {
        this.legales = legales;
        this.costo = costo;
    }
    mostrarTraduccionCosto() {
        return `Las traduccion son ${this.legales} y el costo es ${this.costo}`;
    }
}

class TraduccionesPendientes extends Traducciones {
    constructor(legales, costo, cantidad) {
        super(legales, costo);
        this.cantidad = cantidad;
    }
    mostrarSuper() {
        return `Estoy usando el método EXTENDS con SUPER para heredar clases y las traducciones son ${this.legales} , el costo es ${this.costo} y la cantidad es ${this.cantidad}`;
    }
} 
let traduccion1 = new Traducciones('Legales', 350);
let traduccion2 = new Traducciones('Científicas', 400);
let traduccion3 = new Traducciones('Académicas', 500);
let traduccion4 = new Traducciones('Editoriales', 200);
let traduccion5 = new Traducciones('Contratos', 100);

console.log(traduccion1.mostrarTraduccionCosto());
console.log(traduccion2.mostrarTraduccionCosto());
console.log(traduccion3.mostrarTraduccionCosto());
console.log(traduccion4.mostrarTraduccionCosto());
console.log(traduccion5.mostrarTraduccionCosto());

// Traducciones pendientes
let traduccionPendiente1 = new TraduccionesPendientes('Gabriel Luna', 300, 3);

console.log(traduccionPendiente1.mostrarSuper());