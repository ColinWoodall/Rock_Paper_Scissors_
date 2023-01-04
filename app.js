const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    gererateComputerChoice()
    getResult()
}))

function gererateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1){
        computerChoice = computerChoiceDisplay.innerText = "✊"
    }
    if (randomNumber === 2){
        computerChoice = computerChoiceDisplay.innerText = "✋"
    }
    if (randomNumber === 3){
        computerChoice = computerChoiceDisplay.innerText = "✌"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = 'Its a Draw!'
    }
    if (computerChoice === "✊" && userChoice === '✌' || computerChoice === '✋' && userChoice === '✊' || computerChoice === '✌' && userChoice === '✋'){
        result = 'You Lose!'
    }
    if (computerChoice === '✊' && userChoice === '✋' || computerChoice === '✋' && userChoice === '✌' || computerChoice === '✌' && userChoice === '✊'){
        result = 'You Win!'
    }
    resultDisplay.innerHTML = result
}
