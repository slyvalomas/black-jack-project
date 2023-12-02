let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let checky = document.getElementById("score__btn")
let cardNumber = 0
let cardNumber1 = 0
let cardNumber2 = 0

let alive = false
let blackJack=false
let  results = 0

let wow= document.getElementById("wow")
function Gamble(){
    let cardNumber = Math.floor(Math.random()*10)+2
    let cardNumber1 = Math.floor(Math.random()*10)+2
    results = cardNumber+cardNumber1
    card1.textContent=cardNumber
    card2.textContent=cardNumber1
    checky.textContent =results
    results = cardNumber+cardNumber1
    if (results>21){
        alive=false
        blackJack=false
        wow.textContent="you lose"
    } else if (results===21){
        blackJack=true
        wow.textContent="you win!!"
    }else{
        wow.textContent="you need more "
        alive=true
        blackJack=false
    }
    var cardBElement = document.querySelector('.cardb');
    cardBElement.style.display = 'none';

}
function firstGamble(){
    Gamble()

}
function secondGamble(){
    if (alive===true && blackJack===false){
        var cardBElement = document.querySelector('.cardb');
  cardBElement.style.display = 'block';
        let cardNumber2 = Math.floor(Math.random()*10)+2
        card3.textContent=cardNumber2
        results +=cardNumber2
        if (results>21){
            alive=false
            wow.textContent="you lose"
        } else if (results===21){
            blackJack=true
            wow.textContent="you win!!"
        }else{
            wow.textContent="you need more "
            alive=true
        }
        checky.textContent =results
    }

}



