// Repetir algun código secuencialmente
// Iterar n cantidad de veces

// Mostrar números del 1 al 20
// Ciclo For

// Donde empezamos y hasta donde queremos

// Variable de control - incrementa

/*
for(let i = 1; i <= 100; i++) {
    console.log(i);
}
*/

// Do While
// Ejecuta el código una vez y hasta que la condicion se cumpla

/*
let numero;

do {
    numero = prompt('Ingresa un número mayor que 10');
}
while (numero <= 10)
*/


// Cómo mostrar un arreglo usando un ciclo For

/*
let hombres = ["Felipe", "Danilo", "Stywart", "Brayan"];


for(let i = 0; i < hombres.length; i++ ) {
    console.log(hombres[i]);
}
*/

// Tabla de multiplicar del 2

/*
let numerodetabla = parseInt(prompt('Ingresa el número a tabla'))
for(let i = 0; i <= 9; i++) {
    console.log(numerodetabla," x ", i  , " = ", numerodetabla*i )
}
*/

// 1. Mostrar los números desde el 1 hasta el 50
/*
for(let i = 1; i <= 50; i++) {
    console.log(i);
}
*/

// 2. Mostrar los números pares desde el 0 hasta el 20

/*
for(let i = 0; i <= 10; i++) {
    console.log(i * 2);
}
*/

// Tablas de multiplicar del 1 al 10 TODAS

for(let i = 1; i <= 10; i++) {
    console.log("Tabla de multiplicar del ", i);
    for(let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("\n");
}