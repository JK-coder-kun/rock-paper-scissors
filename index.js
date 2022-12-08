const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const btn=document.querySelector(".btn");
let playerSection;
let computerSection;
let roundResult;
let computerPoint=0;
let playerPoint=0;

let showResult=document.querySelector(".result");
let showComputerPoint=document.querySelector(".computerPoint");
let showPlayerPoint=document.querySelector(".playerPoint");

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
        computerSection=getComputerChoice();
        console.log(computerSection);
        playRound(playerSection,computerSection);
        console.log(roundResult);
        showResult.innerHTML=roundResult;
        showComputerPoint.innerHTML="Computer : "+computerPoint;
        showPlayerPoint.innerHTML="Player : "+playerPoint;
}

function playRound(playerSection,computerSection){
    switch(playerSection){
        case "rock":switch(computerSection){
            case "rock":roundResult="Draw";break;
            case "paper":roundResult="You Lose : Paper beats Rock";computerPoint++; break;
            case "scissors":roundResult="You Win : Rock beats Scissors";playerPoint++ ;break;
        };break;
        case "paper":switch(computerSection){
            case "rock":roundResult="You Win : Paper beats rock";playerPoint++;break;
            case "paper":roundResult="Draw";break;
            case "scissors":roundResult="You lose : Scissors beats paper";computerPoint++;break;
        };break;
        case "scissors":switch(computerSection){
            case "rock":roundResult="You Lose : Rock beats Scissors";computerPoint++;break;
            case "paper":roundResult="You Win : Scissors beats Paper";playerPoint++;break;
            case "scissors":roundResult="Draw";break;
        }break;
    }
}


function game(){
    for(let i=0;i<5;i++){
        playRound();
    }
}