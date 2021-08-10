
//Variable initialization for user cards
const userHand = {
  firstCard: 0,
  secondCard: 0,
  thirdCard: 0,
  fourthCard: 0,
  fifthCard: 0,
  sixthCard: 0,
  totalResult: 0,
  message: ""  
}



//Variable initialization for bank/croupier cards
const bankHand = {
  firstCard:0,
  secondCard:0,
  thirdCard:0,
  fourthCard:0,
  fifthCard: 0,
  sixthCard: 0,
  totalResult:0,
  message: ""
}


//HTML divs, p and h1
let cardOne = document.getElementById("card-1")
let cardTwo = document.getElementById("card-2")
let cardThree = document.getElementById("card-3")
let cardThreeDiv = document.getElementById("div-card3")
let cardFour = document.getElementById("card-4")
let cardFourDiv = document.getElementById("div-card4")
let cardFive = document.getElementById("card-5")
let cardSix = document.getElementById("card-6")
let cardFiveDiv = document.getElementById("div-card5")
let cardSixDiv = document.getElementById("div-card6")
let totalResult = document.getElementById("total")
let cardOneBank = document.getElementById("card-1-bank")
let cardTwoBank = document.getElementById("card-2-bank")
let cardThreeBank = document.getElementById("card-3-bank")
let cardThreeBankDiv = document.getElementById("div-card3-bank")
let cardFourBank = document.getElementById("card-4-bank")
let cardFourBankDiv = document.getElementById("div-card4-bank")
let cardFiveBank = document.getElementById("card-5-bank")
let cardSixBank = document.getElementById("card-6-bank")
let cardFiveBankDiv = document.getElementById("div-card5-bank")
let cardSixBankDiv = document.getElementById("div-card6-bank")
let totalResultBank = document.getElementById("total-bank")
let totalStatus = document.getElementById("total-status")


//HTML Buttons
let elButton = document.getElementById("another-button")
let elButtonShuffle = document.getElementById("shuffle-cards")
let elButtonHold = document.getElementById("hold-button")
let elButtonStart = document.getElementById("start-over")

//Obtain total result
const getResult = (hand) => {
  return hand.firstCard + hand.secondCard + hand.thirdCard + hand.fourthCard + hand.fifthCard
}

//Shuffle 2 first cards for the user and the bank
function getRandomCard(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function shuffleCardsUser() {
    userHand.firstCard = getRandomCard(2, 11)
    userHand.secondCard = getRandomCard(2, 11)    
    cardOne.textContent = userHand.firstCard
    cardTwo.textContent = userHand.secondCard
    userHand.totalResult = getResult(userHand)
    totalResult.textContent = userHand.totalResult
    elButtonShuffle.disabled = true
    suffleCardsBank()
}

function suffleCardsBank() { 
    bankHand.firstCard = getRandomCard(2, 11)
    bankHand.secondCard = getRandomCard(2, 11)
    cardOneBank.textContent = bankHand.firstCard
    cardTwoBank.textContent = "Hidden still" // hidden until the user doesn't request more cards
    bankHand.totalResult = getResult(bankHand)
    totalResultBank.textContent = bankHand.firstCard + " upside down card" // not yet displaying total result, just 1st card, 2nd card still hidden
    partialResult() 
}



//Enables Another Card and Hold button after sumCard < 21
function enableAnotherCardAndHoldButton() {
    elButton.disabled = false
    elButtonHold.disabled = false     
}

// When user presses anotherCard button
function anotherCard() {
    if (userHand.thirdCard == 0){
      userHand.thirdCard = getRandomCard(2, 11)    
      cardThree.textContent = userHand.thirdCard    
      userHand.totalResult = getResult(userHand) 
      totalResult.textContent = userHand.totalResult
      cardThreeDiv.hidden = false
    } else if (userHand.thirdCard != 0 && userHand.fourthCard == 0) {
      userHand.fourthCard = getRandomCard(2, 11)    
      cardFour.textContent = userHand.fourthCard    
      userHand.totalResult = getResult(userHand)  
      totalResult.textContent = userHand.totalResult
      cardFourDiv.hidden = false
    } else if (userHand.thirdCard != 0 && userHand.fourthCard != 0 && userHand.fifthCard == 0) {
      userHand.fifthCard = getRandomCard(2, 11)    
      cardFive.textContent = userHand.fifthCard    
      userHand.totalResult = getResult(userHand)
      totalResult.textContent = userHand.totalResult
      cardFiveDiv.hidden = false
    } else if (userHand.thirdCard != 0 && userHand.fourthCard != 0 && userHand.fifthCard != 0 && userHand.sixthCard)
      userHand.sixthCard = getRandomCard(2, 11)    
      cardSix.textContent = userHand.sixthCard    
      userHand.totalResult = getResult(userHand)
      totalResult.textContent = userHand.totalResult
      cardSixDiv.hidden = false
 partialResult()    
}

//When user press hold button
function hold() {
  bankShowCards()   
}

//After user press hold button
function bankShowCards() {
  cardTwoBank.textContent = bankHand.secondCard
  totalResultBank.textContent = bankHand.totalResult
  bankIA()  
}

//After user press hold button and bank showed cards
function bankIA() {
  if (bankHand.totalResult < 17) {
    anotherCardBank()
  } else if (bankHand.totalResult >= 17) {
    endResult()
  }  
}

//After user press hold button and sumCardBank < 17
function anotherCardBank() {
  if (bankHand.thirdCard == 0){
    bankHand.thirdCard = getRandomCard(2, 11)    
    cardThreeBank.textContent = bankHand.thirdCard
    cardThreeBankDiv.hidden = false   
    bankHand.totalResult = getResult(bankHand)
       
  } else if (bankHand.thirdCard != 0 && bankHand.fourthCard == 0) {
    bankHand.fourthCard = getRandomCard(2, 11)    
    cardFourBank.textContent = bankHand.fourthCard   
    cardFourBankDiv.hidden = false   
    bankHand.totalResult = getResult(bankHand)   
       
  } else if (bankHand.thirdCard != 0 && bankHand.fourthCard != 0 && bankHand.fifthCard == 0) {
    bankHand.fifthCard = getRandomCard(2, 11)    
    cardFiveBank.textContent = bankHand.fifthCardBank 
    cardFiveBankDiv.hidden = false     
    bankHand.totalResult = getResult(bankHand)        
  } else if (bankHand.thirdCard != 0 && bankHand.fourthCard != 0 && bankHand.fifthCard != 0 && bankHand.sixthCard) {
    bankHand.sixthCard = getRandomCard(2, 11)    
    cardSixBank.textContent = bankHand.sixthCardBank 
    cardSixBankDiv.hidden = false     
    bankHand.totalResult = getResult(bankHand)        
  } 
  totalResultBank.textContent = bankHand.totalResult  
  bankIA() 
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
  if (userHand.totalResult == 21) {
    totalStatus.textContent = "It's black jack, you win"
    disableButtons() //Enable buttons to restart game
  } else if (userHand.totalResult < 21) {
    totalStatus.textContent = "You got " + userHand.totalResult + " " + "and the Bank got " + bankHand.firstCard + " so far. You can request a card or Hold"
    enableAnotherCardAndHoldButton()  //Enable buttons to request more cards or hold 
 } else if (userHand.totalResult > 21) {
    totalStatus.textContent = "You got " + userHand.totalResult + " " + "You went over 21, the bank doesn't even need to play!"
    disableButtons()
 }
}

//Final result after bank showed cards
function endResult() {
if (userHand.totalResult == 21) {
  totalStatus.textContent = "You got " + userHand.totalResult + " It's Black Jack, you win!"
  
} else if (bankHand.totalResult == 21) {
  totalStatus.textContent = "Bank got " + bankHand.totalResult + " It's Black Jack, you loose!"
     
} else if (userHand.totalResult > 21) {
  totalStatus.textContent = "You got " + userHand.totalResult + " It's over 21, you loose"
  
} else if (userHand.totalResult < 21 && userHand.totalResult > bankHand.totalResult) {
  totalStatus.textContent = "You got " + userHand.totalResult + " " + "and the Bank got " + bankHand.totalResult + ". You win!"
   
  } else if (userHand.totalResult < 21 && bankHand.totalResult < 21 && userHand.totalResult < bankHand.totalResult) {
  totalStatus.textContent = "You got " + userHand.totalResult + " " + "and the Bank got " + bankHand.totalResult +". You loose!"
  
} else if (userHand.totalResult < 21 && bankHand.totalResult > 21) {
  totalStatus.textContent = "You got " + userHand.totalResult + " " + "and the Bank got " + bankHand.totalResult +". It's over 21, you win!"
  
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
  userHand.firstCard = 0
  userHand.secondCard = 0
  userHand.thirdCard = 0
  userHand.fourthCard = 0
  userHand.fifthCard = 0
  userHand.totalResult = 0
  bankHand.firstCard = 0
  bankHand.secondCard = 0
  bankHand.thirdCard = 0
  bankHand.fourthCard = 0
  bankHand.fifthCard = 0
  bankHand.totalResult = 0
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