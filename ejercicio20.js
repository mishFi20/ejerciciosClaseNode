// 20) Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".

function jugarPiedraPapelTijera(opcionUsuario) {
    const opcionesValidas = ["Piedra", "Papel", "Tijera"];
    const opcionMaquina = opcionesValidas[Math.floor(Math.random() * 3)];
    
    if (!opcionesValidas.includes(opcionUsuario)) {
      return "Opción no válida. Debes elegir entre 'Piedra', 'Papel' o 'Tijera'.";
    }
  
    if (opcionUsuario === opcionMaquina) {
      return `¡Es un empate! Ambos eligieron ${opcionUsuario}.`;
    }
  
    if (
      (opcionUsuario === "Piedra" && opcionMaquina === "Tijera") ||
      (opcionUsuario === "Tijera" && opcionMaquina === "Papel") ||
      (opcionUsuario === "Papel" && opcionMaquina === "Piedra")
    ) {
      return `¡Ganaste! ${opcionUsuario} vence a ${opcionMaquina}.`;
    }
  
    return `¡Perdiste! ${opcionMaquina} vence a ${opcionUsuario}.`;
  }
  
  const opcionUsuario = "Papel"; 
  console.log(jugarPiedraPapelTijera(opcionUsuario));
  