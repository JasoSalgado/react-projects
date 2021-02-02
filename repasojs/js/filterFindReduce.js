//  Métodos en arreglos
const personas = [
    { nombre: 'Jorge', edad: 35, aprendiendo: 'JavaScript' },
    { nombre: 'Arturo', edad: 34, aprendiendo: 'React' },
    { nombre: 'Christian', edad: 21, aprendiendo: 'VueJS' },
    { nombre: 'Memo', edad: 18, aprendiendo: 'HTML5' },
    { nombre: 'Adal', edad: 17, aprendiendo: 'CSS3' },
    { nombre: 'Gerardo', edad: 40, aprendiendo: 'EmmaScript' },
]
console.log(personas);

// filtrado por edades
const mayoresDe = personas.filter(personas => {
    return personas.edad > 25;
});

console.log(mayoresDe);

const nombreConA = personas.filter(personas => {
    return personas.nombre === 'Arturo';
});
console.log(nombreConA);


// Utilizando find
const arturo = personas.find(personas => {
    return personas.nombre === 'Arturo';
});
console.log(arturo);
console.log('El nombre de la persona que está aprendiendo JavaScript es: ' + arturo.nombre);

const emmascript = personas.find(personas => {
    return personas.aprendiendo === 'EmmaScript';
});
console.log(emmascript);
console.log('Gerardo está aprendiendo: ' + emmascript.aprendiendo);

const christian = personas.find(personas => {
    return personas.aprendiendo === 'VueJS';
});
console.log(christian);
console.log('Christian está aprendiendo: ' + christian.aprendiendo);

// Utilizando reduce
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total);