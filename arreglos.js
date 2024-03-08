// Este es el archivo de arreglos
let nombres = ["Felipe", "Danilo", "Laura"];

console.log(nombres);


// Agregar elementos al arreglo de nombres
nombres.push("Tu nombre", "Otro nombre");
console.log(nombres);


// Averiguar el total de elementos
let motos = ["Yamaha", "Kawasaki", "Honda", "Suzuki", "Ducati"];

// motos.length
console.log(motos.length);


// Sumar los números de un arreglo
let numeros = [2, 7, 5, 3, 2];
let suma = numeros.reduce( (acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

// Encontrar el número mayor de un arreglo
let numeroMayor = Math.max(...numeros);
console.log(numeroMayor);

// Invertir los textos de un arreglo
let frutas = ["Manzana", "Pera", "Guayaba", "Lulo", "Mango"];
let frutasInvertidas = frutas.slice().reverse();
console.log(frutasInvertidas);

// Agrupar arreglos en un nuevo arreglo
let mujeres = ["Laura", "Sofia", "Valentina", "Daniela"];
let hombres = ["Felipe", "Danilo", "Stywart", "Brayan"];
let personas = [...mujeres, ...hombres];
console.log(personas);

// Poner en mayúsculas el segundo elemento
let mayusculas = mujeres[2].toUpperCase();
console.log(mayusculas);