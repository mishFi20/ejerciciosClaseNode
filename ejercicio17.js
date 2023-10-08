// 17) programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".

function evaluarCalificacion(calificacion) {
    if (calificacion >= 0 && calificacion <= 5) {
      return "Pésimo";
    } else if (calificacion >= 6 && calificacion <= 7) {
      return "Regular";
    } else if (calificacion >= 8 && calificacion <= 9) {
      return "Bueno";
    } else if (calificacion === 10) {
      return "Excelente";
    } else {
      return "Calificación fuera de rango";
    }
  }
  
  console.log(evaluarCalificacion(10)); 
  