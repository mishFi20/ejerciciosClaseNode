// 13) Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".

function convertirEnMayuscula(cadena) {
   
    const palabras = cadena.split(' ');
  
   
    let resultado = '';
  
  
    for (let i = 0; i < palabras.length; i++) {
      
      const palabra = palabras[i];
      const mayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  
      
      resultado += mayuscula;
  
      
      if (i < palabras.length - 1) {
        resultado += ' ';
      }
    }
  
    return resultado;
  }
  
  const texto = "como estas";
  console.log(convertirEnMayuscula(texto)); 
  