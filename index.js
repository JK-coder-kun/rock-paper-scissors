const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const btn=document.querySelector(".btn");
let playerSection;
let computerSection;

rock.addEventListener('click',function(){getPlayerChoice("rock");});
paper.addEventListener('click',function(){getPlayerChoice("paper");});
scissors.addEventListener('click',function(){getPlayerChoice("scissors");});


function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*100)%3;
    return randomNumber==1 ? "rock" : (randomNumber==2 ? "paper" : "scissors");
};


function getPlayerChoice(choice){
        playerSection= choice;
        console.log(playerSection);
}

function playRound(playerSection,computerSection){

};

function game(){
    for(let i=0;i<5;i++){
        playRound();
    }
}