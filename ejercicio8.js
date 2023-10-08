// 8)Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.

function contarVocales(cadena) {
    const vocales = "AEIOUaeiou";
    let contador = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const texto = "Esto es una prueba";
  console.log(`"${texto}" tiene ${contarVocales(texto)} vocales.`);
  