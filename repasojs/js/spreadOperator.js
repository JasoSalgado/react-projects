// Spread operator
// Como unir dos arreglos
let lenguajes = ['PHP','JAVASCRIPT','PYTHON'];
let frameworks = ['React','VueJS','Django'];

// Uniendo los arreglos
let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion);

// Seleccionando el último arreglo
let [ultimoLenguaje] = [...lenguajes].reverse();
console.log(lenguajes);
console.log(ultimoLenguaje);

let [ultimoFramework] = [ ...frameworks].reverse();
console.log(frameworks);
console.log(ultimoFramework);

// Ejemplo
let numeros = [12, 20, 30, 40];
console.log(numeros);

let [ultimoNumero] = [...numeros].reverse();
console.log(ultimoNumero);

// Ejemplo 2
let letras = ['a', 'b', 'c'];
console.log(letras);

let [ultimaLetra] = [...letras].reverse();
console.log(ultimaLetra);

// Ejemplo 3
let apellidos = ['Ordoñez', 'Salgado', 'Ruíz'];
console.log(apellidos);

let [ultimoApellido] = [...apellidos].reverse();
console.log(ultimoApellido);

// Ejemplo 4
let materias = ['Español','Inglés','Física','Química'];
console.log(materias);

let [ultimaMateria] = [...materias].reverse();
console.log(ultimaMateria);