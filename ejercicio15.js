// 15) Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = 
// "La suma de todos los números es 150".

function sumaNumeros(...numeros) {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return `La suma de todos los números es ${suma}.`;
  }
  
  console.log(sumaNumeros(10, 20, 30, 50, 50)); 
  
  