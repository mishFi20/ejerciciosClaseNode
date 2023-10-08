// 16) Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50)
// = "La edad mayor es 50 y la edad menor es 10".

function encontrarEdadMayorYMenor(...edades) {
    if (edades.length === 0) {
      return "No se proporcionaron edades.";
    }
  
    const edadMayor = Math.max(...edades);
    const edadMenor = Math.min(...edades);
  
    return `La edad mayor es ${edadMayor} y la edad menor es ${edadMenor}.`;
  }
  
  console.log(encontrarEdadMayorYMenor(1, 30, 48, 100));
  