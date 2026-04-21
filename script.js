const RockPoga = document.querySelector('.js-rock');
const PaperPoga = document.querySelector('.js-paper');
const ScissorsPoga = document.querySelector('.js-scissors');
const gameRoundText = document.querySelector('.js-gameRoundText')
const playerScore = document.querySelector('.js-playerScore')
const botScore = document.querySelector('.js-botScore')

const disableButtons = () => {
    PaperPoga.disabled = true
    ScissorsPoga.disabled = true
    RockPoga.disabled = true
}

const choices = ["rock", 'paper', 'scissors']
let PlayerScore = 0
let BotScore = 0
const winningScore = 3

const JanWickChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)

    return choices[randomIndex]
}

const gameRound = (userChoice) => {
    const JanWickMove = JanWickChoice()

    const winsAgainst = {
        rock: "scissors",
        paper: 'rock',
        scissors: 'paper'
    }

    let result = ""

    if(userChoice === JanWickMove){
        result = "It is a draaaaaaaw"
    } else if (winsAgainst[userChoice] === JanWickMove){
        result = "Player win"
        PlayerScore = PlayerScore + 1
        playerScore.innerHTML = PlayerScore
    } else {
        result = "JanWick destroyed you"
        BotScore = BotScore + 1
        botScore.innerHTML = BotScore
    }

    gameRoundText.innerHTML = result

    setTimeout(() => { 
        if (PlayerScore === winningScore){
            disableButtons()
            alert("Penguin is victorius, to restart the game, refresh the page")
        }

        if (BotScore === winningScore){
            disableButtons()
            alert("Jan Wick destroyed you, to restart the game, refresh the page")
        }
    }, 10)
}

RockPoga.addEventListener("click", () => {
    gameRound('rock')
})

PaperPoga.addEventListener("click", () => {
    gameRound("paper")
})

ScissorsPoga.addEventListener("click", () => {
    gameRound("scissors")
})
