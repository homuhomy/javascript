const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const displayResult = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*possibleChoices.length + 1); //add 1 because it can be 0
    console.log(randomNumber)
    
    if(randomNumber===1){
        computerChoice = 'rock';
    }
    else if(randomNumber===2){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice===userChoice){
        result = "it's a draw!"
    }
    else if (computerChoice==='scissor' && userChoice==='paper'){
        result = 'you lost!'
    }
    else if (computerChoice==='paper' && userChoice==='rock'){
        result = 'you lost!'
    }
    else{
        result = 'you win!'
    }
    
    displayResult.innerHTML = result;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice();
    getResult();
}))