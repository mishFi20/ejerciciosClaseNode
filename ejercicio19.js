// 19) programa que muestre los numeros primos de 1 a 1000.

function contarNumerosPrimos(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
  
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function encontrarPrimosEnRango(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
      if (contarNumerosPrimos(i)) {
        console.log(i);
      }
    }
  }
  
  encontrarPrimosEnRango(1, 1000);
  