
//Variable initialization for user cards
let firstCard
let secondCard
let thirdCard = null
let fourthCard = null
let fifthCard = null
let sumCard
//Variable initialization for bank/croupier cards
let firstCardBank
let secondCardBank
let thirdCardBank = null
let fourthCardBank = null
let fifthCardBank = null
let sumCardBank

//HTML divs, p and h1
let cardOne = document.getElementById("card-1")
let cardTwo = document.getElementById("card-2")
let cardThree = document.getElementById("card-3")
let cardThreeDiv = document.getElementById("div-card3")
let cardFour = document.getElementById("card-4")
let cardFourDiv = document.getElementById("div-card4")
let cardFive = document.getElementById("card-5")
let cardFiveDiv = document.getElementById("div-card5")
let totalResult = document.getElementById("total")
let cardOneBank = document.getElementById("card-1-bank")
let cardTwoBank = document.getElementById("card-2-bank")
let cardThreeBank = document.getElementById("card-3-bank")
let cardThreeBankDiv = document.getElementById("div-card3-bank")
let cardFourBank = document.getElementById("card-4-bank")
let cardFourBankDiv = document.getElementById("div-card4-bank")
let cardFiveBank = document.getElementById("card-5-bank")
let cardFiveBankDiv = document.getElementById("div-card5-bank")
let totalResultBank = document.getElementById("total-bank")
let totalStatus = document.getElementById("total-status")


//HTML Buttons
let elButton = document.getElementById("another-button")
let elButtonShuffle = document.getElementById("shuffle-cards")
let elButtonHold = document.getElementById("hold-button")
let elButtonStart = document.getElementById("start-over")

//Shuffle 2 first cards for the user and the bank
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
    cardTwoBank.textContent = "hidden still" // hidden until the user doesn't request more cards
    sumCardBank = firstCardBank + secondCardBank
    totalResultBank.textContent = firstCardBank // not yet displaying total result, 2nd card still hidden 
    elButtonShuffle.disabled = true
    partialResult()      
}

//Enables Another Card and Hold button after sumCard < 21
function enableAnotherCardAndHoldButton() {
  if (thirdCard == null) {
    elButton.disabled = false
    elButtonHold.disabled = false     
  }
}

// When user presses anotherCard button
function anotherCard() {
    if (thirdCard == null){
      thirdCard = getRandomCard(2, 11)    
      cardThree.textContent = thirdCard    
      sumCard = firstCard + secondCard + thirdCard    
      totalResult.textContent = sumCard
      cardThreeDiv.hidden = false
    } else if (thirdCard != null && fourthCard == null) {
      fourthCard = getRandomCard(2, 11)    
      cardFour.textContent = fourthCard    
      sumCard = firstCard + secondCard + thirdCard + fourthCard  
      totalResult.textContent = sumCard
      cardFourDiv.hidden = false
    } else if (thirdCard != null && fourthCard != null && fifthCard == null) {
      fifthCard = getRandomCard(2, 11)    
      cardFive.textContent = fifthCard    
      sumCard = firstCard + secondCard + thirdCard + fourthCard + fifthCard
      totalResult.textContent = sumCard
      cardFiveDiv.hidden = false
    }
 partialResult()    
}

//After user press hold button
function bankShowCards() {
  cardTwoBank.textContent = secondCardBank
  totalResultBank.textContent = firstCardBank + secondCardBank
  bankIA()  
}

//After user press hold button and bank showed cards
function bankIA() {
  if (sumCardBank < 17) {
    anotherCardBank()
  } else if (sumCardBank > 17) {
    endResult()
  }  
}

//After user press hold button and sumCardBank < 17
function anotherCardBank() {
  if (thirdCardBank == null){
    thirdCardBank = getRandomCard(2, 11)    
    cardThreeBank.textContent = thirdCardBank
    cardThreeBankDiv.hidden = false   
    sumCardBank = firstCardBank + secondCardBank + thirdCardBank    
    totalResultBank.textContent = sumCardBank
    bankIA()
  } else if (thirdCardBank != null && fourthCardBank == null) {
    fourthCardBank = getRandomCard(2, 11)    
    cardFourBank.textContent = fourthCardBank   
    cardFourBankDiv.hidden = false   
    sumCardBank = firstCardBank + secondCardBank + thirdCardBank + fourthCardBank   
    totalResultBank.textContent = sumCardBank
    bankIA()
  } else if (thirdCardBank != null && fourthCardBank != null && fifthCardBank == null) {
    fifthCardBank = getRandomCard(2, 11)    
    cardFiveBank.textContent = fifthCardBank 
    cardFiveBankDiv.hidden = false     
    sumCardBank = firstCardBank + secondCardBank + thirdCardBank + fourthCardBank + fifthCardBank
    totalResultBank.textContent = sumCardBank
    bankIA()
  }  
}

//When user press hold button
function hold() {
  bankShowCards()   
}
// Button status change
function disableButtons() {
  elButton.disabled = true
  elButtonHold.disabled = true
  elButtonStart.disabled = false
  elButtonShuffle.disabled = true
}




//Calculation of partial results, before bank showed cards
function partialResult() {
  if (sumCard == 21) {
    totalStatus.textContent = "It's black jack, you win"
    disableButtons() //Enable buttons to restart game
  } else if (sumCard < 21) {
    totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + firstCardBank + " so far. You can request a card or Hold"
    enableAnotherCardAndHoldButton()  //Enable buttons to request more cards or hold 
 } else if (sumCard > 21) {
    totalStatus.textContent = "You got " + sumCard + " " + "You went over 21, the bank doesn't even need to play!"
    disableButtons()
 }
}

//Final result after bank showed cards
function endResult() {
if (sumCard == 21) {
  totalStatus.textContent = "You got " + sumCard + " It's Black Jack, you win!"
  
} else if (sumCardBank == 21) {
  totalStatus.textContent = "Bank got " + sumCardBank + " It's Black Jack, you loose!"
     
} else if (sumCard > 21) {
  totalStatus.textContent = "You got " + sumCard + " It's over 21, you loose"
  
} else if (sumCard < 21 && sumCard > sumCardBank) {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank + ". You win!"
   
  } else if (sumCard < 21 && sumCardBank < 21 && sumCard < sumCardBank) {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank +". You loose!"
  
} else if (sumCard < 21 && sumCardBank > 21) {
  totalStatus.textContent = "You got " + sumCard + " " + "and the Bank got " + sumCardBank +". It's over 21, you win!"
  
}
  disableButtons()
}

//After user press restart button
function restartButtonStatus() {
  elButton.disabled = true
  elButtonHold.disabled = true
  elButtonStart.disabled = true
  elButtonShuffle.disabled = false
}

function startOver() {
  firstCard = null
  secondCard = null
  thirdCard = null
  fourthCard = null
  fifthCard = null
  sumCard = null
  firstCardBank = null
  secondCardBank = null
  thirdCardBank = null
  fourthCardBank = null
  fifthCardBank = null
  sumCardBank = null
  cardOne.textContent = "..."
  cardTwo.textContent = "..."
  cardThree.textContent = "..."
  cardFour.textContent = "..."
  cardFive.textContent = "..."
  totalResult.textContent = "..."
  cardOneBank.textContent = "..."
  cardTwoBank.textContent = "..."
  cardThreeBank.textContent = "..."
  cardFourBank.textContent = "..."
  cardFiveBank.textContent = "..."
  totalResultBank.textContent = "..."
  totalStatus.textContent = "..."
  restartButtonStatus()
}