let arr = [];
let quantidade;
let papagaios;
let papagaio;
let content;
let verifier;
let chosen1;
let content_Parrots;

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

function mix() {
   return 0.5 - Math.random();
}

function showCards() {
   const elemento = document.querySelector(".cards");
   content_Parrots = [];

   papagaios  = [0,1,2,3,4,5,6];

   papagaios.sort(mix);

   for(let i = 0; i < quantidade/2; i++) {
      content_Parrots.push(papagaios[i]);
      content_Parrots.push(papagaios[i]);
   }

   content_Parrots.sort(mix);
   
   for(let i = 0; i < quantidade; i++) {

      papagaio = content_Parrots[i];
      elemento.innerHTML += 
      `        <div id="card${i}" onclick="verifyCards(this)"  class="card">
                  <div class="view parrot">
                     <img src="assets/img/front 1.png" alt="">
                  </div>
                  <div class="view parrot-gif">
                     <img src="assets/img/papagaio${papagaio}.gif" alt="">
                  </div>
               </div>
      `
   }
}

function verifyCards(place) {
   turnCards(place);
   
}

function turnCards(place) {
   place.classList.add("flip");
}




