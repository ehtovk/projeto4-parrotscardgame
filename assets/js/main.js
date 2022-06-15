let arr;
let quantidade;

startGame();

function startGame() {
   quantidade = prompt("Digite a quantidade de cartas par de 4 a 14:");

   if (quantidade <= 14 && quantidade >= 4 && quantidade%2 === 0) {
      showCards();
   } else {
      quantidade = 0;
      startGame();
   }
}

function showCards() {
   const elemento = document.querySelector(".cards");
   
   for(let i = 0; i < quantidade; i++) {
      elemento.innerHTML += 
      `        <div id="card${i}" class="card" data-identifier="card">
                  <div class="face " data-identifier="back-face" >
                     <img src="assets/img/front 1.png" alt="">
                  </div>
                  <div class="face turned-off" data-identifier="front-face">
                     <img src="assets/img/papagaio1.gif" alt="">
                  </div>
               </div>
      `
   }
}

