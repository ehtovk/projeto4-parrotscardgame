function startGame() {
   const quantidade = prompt("Digite a quantidade de cartas de 4 a 14:");

   if (quantidade <= 14 && quantidade >= 4 && quantidade%2 === 0) {
    alert("Seu numero é valido");
   } else {
    alert("Seu numero não é valido")
    startGame();
   }
}
startGame();