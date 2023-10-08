//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function cortarCadenas(cadena, numero) {
    let palabraCortada = '';
    for (let i = 0; i < numero; i++) {
        palabraCortada = palabraCortada + cadena[i];
    }

    console.log(palabraCortada);
}

cortarCadenas("cadena", 2);