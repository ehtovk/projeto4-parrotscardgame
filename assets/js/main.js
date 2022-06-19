let arr = [];
let quantidade;
let papagaios;
let papagaio;
let content_Parrots;

let first_Card;
let first_Img;
let second_Card;
let second_Img;

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
      `        <div id="card${i}" onclick="turnCards(this)"  class="card">
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

function turnCards(place) {
   let click = place;
   flipCards(click);
   if(!first_Card) {
      return first_Card = click;
      
   } else if (place.id !== first_Card.id) {
      second_Card = click;
      
   }
   first_Img = first_Card.querySelector(".parrot-gif>img").src;
   second_Img = second_Card.querySelector(".parrot-gif>img").src;
   verifyCards(first_Img, second_Img);
   
}

function verifyCards(imgOne, imgTwo) {
   if (imgOne === imgTwo) {
      first_Card.removeAttribute("onclick");
      second_Card.removeAttribute("onclick");
      first_Card = second_Card = "";
   }

   setTimeout(()=> {
      first_Card.classList.remove("flip");
      second_Card.classList.remove("flip");
      first_Card = second_Card = "";
   }, 1000);
}

function flipCards(place) {
   place.classList.add("flip");
}




