//4) Programa una fucion para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.

function calcularDescuento( precio,porcentaje){
 const descuento = precio * (porcentaje/100) 
 return precio - descuento 
}
console.log (calcularDescuento(1000,10))
