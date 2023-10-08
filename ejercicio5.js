//5) Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.
let fechaNacimiento = new Date(2004,03,13);
let hoy = new Date();
let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
console.log(`${años} años`)
