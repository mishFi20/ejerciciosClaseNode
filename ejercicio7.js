// 7) programa convierte decimal a binario. ejemplo: 1000 = 1111101000.

function decimalABinario(numero) {
    if (numero < 0 || !Number.isInteger(numero)) {
      return "El número debe ser un entero positivo.";
    }
  
    return numero.toString(2);
  }
  
  console.log(decimalABinario(100)); // Devuelve "1111101000"
  

  