const nombre = prompt("¿Cómo te llamás?");
const edadIngresada = prompt("¿Cuántos años tenés?");
const ciudad = prompt("¿En qué ciudad vivís?");

const edad = Number(edadIngresada);
const edadProximoAño = edad + 1;

const mensaje = "Hola, " + nombre + ". Vivís en " + ciudad +
    " y actualmente tenés " + edad + " años.";

const mensajeEdad = "El año que viene vas a tener " +
    edadProximoAño + " años.";

console.log(mensaje);
console.log(mensajeEdad);

alert(mensaje);
alert(mensajeEdad);