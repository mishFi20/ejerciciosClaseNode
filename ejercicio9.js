// 9) Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.

function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas y eliminamos los espacios
    palabra = palabra.toLowerCase().replace(/\s/g, '');
  
    // Invertimos la palabra
    const palabraInvertida = palabra.split('').reverse().join('');
  
    // Comparamos la palabra original con la invertida
    return palabra === palabraInvertida;
  }
  
  console.log(esPalindromo("Ala")); // Devuelve true
  
  
