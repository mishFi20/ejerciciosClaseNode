// 12) Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.

function contarPalabras(cadena) {
    //split para dividir las cadenas en palabras
    const palabra = cadena.split(/\s+/);
    
    //filtrar las palabras no vacias
    const palabrasNoVacias = palabra.filter(palabra => palabra.length > 0);

    return palabrasNoVacias.length;
}

const texto = "Hola a todos";
console.log(` tiene ${contarPalabras(texto)} palabras.`);
