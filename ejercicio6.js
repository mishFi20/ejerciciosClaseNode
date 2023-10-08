//6) Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV
function decimalARomano(numero){
    const numeroReal = numero;
    const valorRomano = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];
    const simboloRomano = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV","I"
    ];
    if (numero <= 0 || numero > 1000) {
        return ("los rangos estan fuera de 1-1000");
    }
    let numeroRomano = ' ';
    for( let i = 0; i < valorRomano.length; i++){
        while (numero >=valorRomano[i]) {
            numeroRomano += simboloRomano[i];
            numero -= valorRomano[i];
        }
    }
    
    return (`El numero ${numeroReal} es ${numeroRomano} en romano`);
}
const numero = 2;
const numeroRomano = decimalARomano(numero);
console.log(numeroRomano);
