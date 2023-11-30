let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let checky = document.getElementById("score__btn")
var cardNumber = Math.floor(Math.random()*10)+2
var cardNumber1 = Math.floor(Math.random()*10)+2
var cardNumber2 = Math.floor(Math.random()*10)+2
var results= cardNumber +cardNumber1 +cardNumber2
let wow= document.getElementById("wow")
function firstGamble(){

    card1.textContent=cardNumber
}
function secondGamble(){

    card2.textContent=cardNumber1
}
function threeGamble(){

    card3.textContent=cardNumber2
}
function check(){

    checky.textContent =results
    if (results>21){
        wow.textContent="you lose"
    } else if (results==21){
        wow.textContent="you win!!"
    }else{
        wow.textContent="you need more "
    }
}
