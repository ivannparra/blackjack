let firstCard
let secondCard
let thirdCard
let sumCard
let firstCardBank
let secondCardBank
let thirdCardBank = null
let sumCardBank

let cardOne = document.getElementById("card-1")
let cardTwo = document.getElementById("card-2")
let cardThree = document.getElementById("card-3")
let totalResult = document.getElementById("total")
let cardOneBank = document.getElementById("card-1-bank")
let cardTwoBank = document.getElementById("card-2-bank")
let cardThreeBank = document.getElementById("card-3-bank")
let totalResultBank = document.getElementById("total-bank")
let totalStatus = document.getElementById("total-status")


let elButton = document.getElementById("another-button")
let elButtonShuffle = document.getElementById("shuffle-cards")
let elButtonHold = document.getElementById("hold-button")
let elButtonStart = document.getElementById("start-over")


function getRandomCard(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function shuffleCards() {
    firstCard = getRandomCard(2, 11)
    secondCard = getRandomCard(2, 11)
    firstCardBank = getRandomCard(2, 11)
    secondCardBank = getRandomCard(2, 11)
    cardOne.textContent = firstCard
    cardTwo.textContent = secondCard
    sumCard = firstCard + secondCard
    totalResult.textContent = sumCard
    cardOneBank.textContent = firstCardBank
    cardTwoBank.textContent = secondCardBank
    sumCardBank = firstCardBank + secondCardBank
    totalResultBank.textContent = sumCardBank
    elButtonShuffle.disabled = true
    partialResult()       
}

function requestAnotherCardorHold() {
  if (thirdCard == null) {
    elButton.disabled = false
    elButtonHold.disabled = false     
  }
}


function anotherCard() {
    thirdCard = getRandomCard(2, 11)
    thirdCardBank = getRandomCard(2, 11)
    cardThree.textContent = thirdCard
    cardThreeBank.textContent = thirdCardBank
    sumCard = firstCard + secondCard + thirdCard
    sumCardBank = firstCardBank + secondCardBank + thirdCardBank
    totalResult.textContent = sumCard
    totalResultBank.textContent = sumCardBank
    endResult()    
}

function hold() {
    endResult()
}

function disableButtons() {
  elButton.disabled = true
  elButtonHold.disabled = true
  elButtonStart.disabled = false
  elButtonShuffle.disabled = true

}

function restartButtonStatus() {
  elButton.disabled = true
  elButtonHold.disabled = true
  elButtonStart.disabled = true
  elButtonShuffle.disabled = false

}

function partialResult() {
  if (sumCard == 21) {
    totalStatus.textContent = "It's black jack, you win"
    disableButtons()
  } else if (sumCardBank == 21){
    totalStatus.textContent = "The bank got black jack, you loose"
    disableButtons()
  } else {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank +". You can request a third card or Hold"
  requestAnotherCardorHold()  
}
}

function startOver() {
  firstCard = null
  secondCard = null
  thirdCard = null
  sumcard = null
  firstCardBank = null
  secondCardBank = null
  thirdCardBank = null
  sumcardBank = null
  cardOne.textContent = "..."
  cardTwo.textContent = "..."
  cardThree.textContent = "..."
  totalResult.textContent = "..."
  cardOneBank.textContent = "..."
  cardTwoBank.textContent = "..."
  cardThreeBank.textContent = "..."
  totalResultBank.textContent = "..."
  totalStatus.textContent = "..."
  restartButtonStatus()

}


function endResult() {
if (sumCard == 21) {
  totalStatus.textContent = "You got " + sumCard + " It's Black Jack, you win!"
  
} else if (sumCardBank == 21) {
  totalStatus.textContent = "Bank got " + sumCardBank + " It's Black Jack, you loose!"
     
} else if (sumCard > 21) {
  totalStatus.textContent = "You got " + sumCard + " It's over 21, you loose"
   
} else if (sumCard < 21 && sumCard > sumCardBank) {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank +". You win!"
   
  } else if (sumCard < 21 && sumCardBank < 21 && sumCard < sumCardBank) {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank +". You loose!"
  
} else if (sumCard < 21 && sumcardBank > 21) {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank +". It's over 21, you win!"
  
}
  disableButtons()
}

