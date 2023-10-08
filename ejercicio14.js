// 14) Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".

function invertirCadena(cadena) {
   
    const caracteres = cadena.split('');
  
    const caracteresInvertidos = caracteres.reverse();
  
    const cadenaInvertida = caracteresInvertidos.join('');
  
    return cadenaInvertida;
  }
  
  const texto = "Hoy es martes";
  console.log(invertirCadena(texto)); 
  