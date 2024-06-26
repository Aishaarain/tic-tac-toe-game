let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGamebtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let count1=document.querySelector(".countX");
let count2=document.querySelector(".countO");
let Draw=document.querySelector(".draw");
let drawscore=0;
let xWins=0;
let oWins=0;
let gameActive=true;
let currentplayer='X';
let count=0;

let turnO=true;
const winpattern=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];


box.forEach((box)=>{

    box.addEventListener("click",()=>{
if(turnO){
box.innerText="O";
box.style.color=" rgb(26, 26, 125)";
turnO =false;
}
else{
    box.innerText="X";
    box.style.color="#bf3028";
    turnO=true;
}
box.disabled=true;

count++;
let iswin =checkwin();
if(count===9 && !iswin){
gameDraw();
display();


}

    });
});
const showWinner=(winner)=>{
    if (winner==="X"){
        msg.innerText=`Congratulations Winner is X`;
xWins++;
count1.innerText=`${xWins}`;}
else{
    msg.innerText=`Congratulations Winner is O`;
    oWins++;
    count2.innerText=`${oWins}`;}   

msgContainer.classList.remove("hide");
disable();
};



const checkwin= ()=>{
    let roundwon=false;
    for(P of winpattern){
let pos1val = box[P[0]].innerText;
let pos2val = box[P[1]].innerText;
let pos3val = box[P[2]].innerText;

if(pos1val!="" && pos2val!="" && pos3val!="" ){
    if(pos1val === pos2val && pos2val === pos3val){
       
        showWinner(pos1val);
        newGamebtn.classList.add("active");
roundwon=true;
    }
}
    }
};
const gameDraw = () => {
    drawscore++;
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    Draw.innerText=`${drawscore}`;
    disable();
    

  };

const disable=()=>{
    for(let b of box){
        b.disabled=true;
    }
};

const enable=()=>{
    for(let e of box){
        e.disabled=false;
        e.innerText="";
    }
};
const resetgame=()=>{
    turnO=true;
    count=0;
enable();
msgContainer.classList.add("hide");
}
const display=()=>{
    for(let count of box){
        count.classList.add("display");
    }
}
resetBtn.addEventListener("click",resetgame);
newGamebtn.addEventListener("click",resetgame);

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.animated-btn');
    
    function animateButton(index) {
        if (index >= box.length) return; // Stop when all buttons are animated
        
        box[index].classList.add('display');
        setTimeout(() => {
            animateButton(index + 1);
        }, 500); // 500ms delay between each button
    }
    
    animateButton(0);
    
});
