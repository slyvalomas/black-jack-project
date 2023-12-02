let firstCard =getRandomCard()  //Math.floor(Math.random()*10)+2
let secondCard =getRandomCard() //Math.floor(Math.random()*10)+2
let cards=[]
var card = document.querySelector("#cards")
var sumy = document.querySelector("#sumy")
let sum = 0
let blackjack = false
var message = document.querySelector("#message-el")
let alive =false
let user ={
    newUser : "jeff",
    Money:"250$",
    sayHi: function hiThere(){
        document.getElementById("sayhi").textContent="hi mr "+user.newUser +"!!"
    }
}
user.sayHi()
let username=document.querySelector("#username")

username.textContent=user.Money +":"+user.newUser
function getRandomCard(){
    let cardIB = Math.floor(Math.random()*13)+1
    if (cardIB===1){
        return 11
    }else if (cardIB>10){
        return 10
    }else{
        return cardIB
    }




}
let random=getRandomCard()
console.log(random)
function startGame(){
    renderGame()
    

    
}
function renderGame(){
    
    let firstCard =getRandomCard() 
    let secondCard =getRandomCard() 
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    alive=true


    for (i=0;i<cards.length;i++){
       
        card.textContent += " "+cards[i]
        sumy.textContent =sum
        
}
    let messageME = "" 
    if (sum===21){
        messageME = "you win!"
        blackjack =true
    }else if (sum>21){
        messageME="you lose!"
        alive = false
        
    }else{
        messageME="add a bonnus card!"
        message.textContent=messageME
        alive===true
    }
}


function check(){
    if (alive===true && blackjack===false ){
            var car = getRandomCard()
            card.textContent +=" "+ car
            sum +=car
            sumy.textContent =sum
            let messageME = ""
    
        if (sum>21){
        messageME="you lose!"
        alive = false
        }else if (sum===21){
            blackjack =true
        messageME = "you win!"
        }else{
        messageME="add a bonnus card!"
        
            
        }
            message.textContent=messageME
    
        }
        if (sum>21){
            function check(){
                alive=false
                sum=""
                card.textContent =""
                sumy.textContent =""
                let messageME="sorry you lose!!"
                message.textContent=messageME
            }
    }
    
}


function take(){
    let meHand = "scissor"
    let rsandomaize=Math.floor(Math.random()*3)
    let pcHands = ["rock","paper","scissor"]
    console.log("the pc hand is : "+pcHands[rsandomaize])
    console.log("your hand is : "+meHand)
    
    let msg=""
    if (pcHands[rsandomaize]===meHand){
        msg="tie!"
    }else if   ((pcHands[rsandomaize]==="rock" && meHand==="scissor")||
                (pcHands[rsandomaize]==="paper" && meHand==="rock")||
                (pcHands[rsandomaize]==="scissor" && meHand==="paper"))
    {
        msg="you lose the pc win!"
    }else{
        msg="you win!"
    }
    console.log(msg)
}
take()
