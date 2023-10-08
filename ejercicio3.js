// 3)Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function separarPalabras (cadenaADividir,separador){
    return cadenaADividir.split(separador)
    
}
console.log(separarPalabras("hola que hace", " " ))