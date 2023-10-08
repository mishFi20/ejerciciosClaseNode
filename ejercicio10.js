// 10) Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".

function eliminarEspacios(cadena){
    return cadena.replace(/ /g, '');
}
const texto = "Hola a todos";
const textoSinEspacio = eliminarEspacios(texto);
console.log(textoSinEspacio);