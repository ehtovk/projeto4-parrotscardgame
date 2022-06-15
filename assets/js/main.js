let arr;
let quantidade;
let papagaios;
let content;
let verifier;

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

      let papagaio = content_Parrots[i];
      elemento.innerHTML += 
      `        <div id="card${i}" onclick="turnAroundOnClick(this)"  class="card" data-identifier="card">
                  <div class="face parrot" data-identifier="back-face" >
                     <img src="assets/img/front 1.png" alt="">
                  </div>
                  <div class="face parrot-gif turned-off" data-identifier="front-face">
                     <img src="assets/img/papagaio${papagaio}.gif" alt="">
                  </div>
               </div>
      `
   }
}

function turnAroundOnClick(place) {
   turnCards(place);
}

function turnCards(place) {
   place.querySelector(".parrot").classList.toggle("turned-off");
   place.querySelector(".parrot-gif").classList.toggle("turned-off");
}



