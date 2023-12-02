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

let hello = ["hello my ",
"name",
"is",
"brahim",
"abd",
"almoumen",
"now im learning it by the freecode camp course ",
"i need to put more hard work and more hours because why",
"did i get out of school if i will just spent 5-6h a day?"
]
let see = document.querySelector("div")

for (i=0; i<hello.length ; i++){
    see.textContent+= " "+hello[i] 
    console.log(hello[i])
}
let message =[" nonono lala","oh ues ","yes html ! bla bla","css java?","are you fine","hi how are you"]
let newMessage ="oh yeah you are right"
message.push(newMessage)
message.pop()
console.log(message[Math.floor(Math.random()*11)])
let message =["fist is first","rain is down","wthhhhh omg nowayaya bro hold on hold on  jordan never did that movee","thats borden","okiokiokioki lalalal","jesus","sometimes"]
for (let x = 0;x>10;x+=1){
console.log(x)
}
let player1 = 101
let player2 = 102
function howFast(){
    if (player1<player2){
        return player1
    }else if (player1===player2){
        return + player1
    }else{
        return player1 
    }
}
let faster = howFast()
document.querySelector("div").textContent="the faster racer is " +faster +"s"
function totalTime(){
    var totalTimer = player1 +player2 //mmm i did face some wired questions like this on biology is it a race that going on just 1time 
    return totalTimer
}
function totalTime1(){
    if (player1>=player2){
        return player1
    }else{
        return player2
    } 
}
let totalTiming = totalTime()
let totalTiming1 = totalTime1()
document.querySelector("div").textContent+=" the total race is  " + totalTiming+"s" +" or its "+totalTime1()
// V1
// let fruit =["apple","orange","apple","apple","orange"]
// function addApple(){
//     let apple = fruit.filter(item=> item==="apple");
//     document.querySelector(".apple").textContent=apple
// }
// function addOrange(){
//     let orange = fruit.filter(item=> item==="orange");
//     document.querySelector(".orange").textContent=orange
// }
// addApple()
// addOrange()
//V2
let fruit =["apple","orange","apple","apple","orange"]
let apple = document.querySelector(".apple")
let orange =document.querySelector(".orange")
function add(){
    for (i=0;i<fruit.length;i++){
        if (fruit[i]==="orange"){
            orange.textContent+=" "+fruit[i]
        }else{
            apple.textContent+=" "+fruit[i]
        }
    }
}
add()
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
let day = 1
let week = "friday"
if (day===13 && week==="friday"){
    console.log("booooo")
}else{
    console.log("its not boooo!")
}
let largeCountries = ["russia","canada","usa","china"]


for (i=0;i<largeCountries.length;i++){
    console.log("the largest countries in the world are:")
    console.log("-"+largeCountries[i])


}
