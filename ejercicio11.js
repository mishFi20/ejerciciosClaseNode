// 11)Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".

function primeraLetraMayuscula(cadena) {
    // Dividir la cadena en palabras utilizando un espacio como separador
    const palabras = cadena.split(' ');
  
    // Iniciamos una variable para almacenar las letras iniciales en mayúsculas
    let inicialesMayusculas = '';
  
    
    for (const palabra of palabras) {
      // Verificamos si la palabra no está vacía
      if (palabra.length > 0) {
        // Agregamos la primera letra de la palabra en mayúsculas a la cadena resultante
        inicialesMayusculas += palabra[0].toUpperCase();
      }
    }
  
    return inicialesMayusculas;
  }
  
  const texto = "mishell figueroa";
  console.log(primeraLetraMayuscula(texto)); 
  