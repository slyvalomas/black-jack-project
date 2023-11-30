let firstCard=[2,3,4,5,6,7,8,9,10,11]
let secondCard=[2,3,4,5,6,7,8,9,10,11]
let cards = [firstCard[5],secondCard[3]]
let sum =firstCard[5]+secondCard[3]

function startGame(){
    let cards = [firstCard[5],secondCard[3]]
    let sum =firstCard[5]+secondCard[3]
for (i=0;i<cards.length;i++){
    let cards = [firstCard[5],secondCard[3]]
    document.getElementById("cards").textContent +=" "+ cards[i]
     
}
    let bnCard = Math.floor(Math.random()*10)+2
    document.getElementById("sumy").textContent= sum
    let message =""
    let win = false
    let isAlive=true
    if (sum<=20){
        message ="you need more"
    }   else if (sum === 21){
        message ="you win"
        win = true
    }   else{
        isAlive= false
        message ="you lose"
        
    }
    console.log(win)//if its true then you did win on this game! lets make it better

function check(){
    if (win===true){
        console.log("you acutely did win!")
    }
    else{
        console.log("sorry you did never win")
    }
}
check()
function stillAlive(){
    if  (isAlive===true){
        console.log("you still alive")
    }else{
        console.log("you are dead")
    }
}





stillAlive()
//
document.getElementById("message-el").textContent=message
}
function check(){
  
    let bnCard =[2,3,4,5,6,7,8,9,10,11]
    let cards =[firstCard[5],secondCard[3],bnCard[8] ]
let bnSum = firstCard[5]+secondCard[3] +bnCard[8] 
    if (bnCard=bnCard){
        for (i=0;i<cards.length;i++){
            document.getElementById("cards").textContent =cards[0]+" "+cards[1]+" "+cards[2]}
document.querySelector("#sumy").textContent=bnSum
    }else{
        sum=sum
    }
let message2 =""
let win = false
let isAlive=true
if (bnSum<=20){
    message2 ="you need more"
}   else if (bnSum === 21){
    message2 ="you win"
    win = true
}   else{
    isAlive= false
    message2 ="you lose"
    
}
document.getElementById("message-el").textContent=message2
console.log(message2)
}

