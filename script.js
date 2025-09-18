const coin = document.getElementById("coin");
const button = document.getElementById("flipBtn");
const resultado = document.getElementById("resultado");

function flipCoin() {
  // Decide resultado aleatório
  const result = Math.random() < 0.5 ? "Cara" : "Coroa";

  // Define rotação aleatória pra parecer natural
  let rotation = Math.floor(Math.random() * 5 + 3) * 360;

  if (result === "Coroa") {
    coin.style.transform = `rotateY(${rotation + 180}deg)`;
  } else {
    coin.style.transform = `rotateY(${rotation}deg)`;
  }

  // Mostra resultado depois da animação
  setTimeout(() => {
    resultado.textContent = "Resultado: " + result;
  }, 1000); // tempo da animação
}

// Eventos
coin.addEventListener("click", flipCoin);
button.addEventListener("click", flipCoin);
