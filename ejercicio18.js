// 18) programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.

function cifrasDeNumeros(numero){
    const cantidad = numero.toString();
    return cantidad.length;   
}
const numero = 2004;
const cifras = cifrasDeNumeros(numero);
console.log(`${cifras} cifras`);