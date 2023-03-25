// Black Jack

let player = {
    name: "Your Cash",
    chips: 5000,
    // get details() {
    //     return this.name + ": $" + this.chips
    // }
}


let cards = []
let sum = 0
let hasBlckjack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": #" + player.chips

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

// Logic of the game

function renderGame() {
    cardsEl.textContent = "Cards: " 

    // Create a for loop to render the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlckjack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": #" + (player.chips)
}

function newCard() {
    if (isAlive === true && hasBlckjack === false) {
    // console.log("Drawing a new card from the deck") 
    let card = getRandomCard()
    sum += card
    // Push the third card
    cards.push(card)
    // console.log(cards)
    // Invoke the renderGame() again
    renderGame()
    addSum()
    }
}

function addSum() {
    if (sum === 21) {
        playerEl.textContent = player.name + ": #" + (player.chips + 50)
    }
    else if (sum > 21) {
        playerEl.textContent = player.name + ": #" + (player.chips - 30)
    }
}



const inputEl = document.querySelector("#input-el")
const msg = document.querySelector("#message")
const btnEl = document.querySelector("#btn")

let time = new Date().getHours();
let greetings;
let inputName = "";

if (time < 12) {
    greetings = "Good morning ";
}
else if (time < 4) {
    greetings = "Good afternoon ";
}
else {
    greetings = "Good evening "
}
console.log(greetings)



// const emptyMessage = document.getElementById("empty-message")

function myfunction() {
    // msg.textContent = inputEl.value
    if (!inputEl.value) {
        // emptyMessage.textContent = "Input cannot be empty"
    // const para = document.createElement("p")
    // para.textContent = "Please enter a name"
    // msg.append(para)

    }
    else {
    const para = document.createElement("p")
    para.textContent = greetings + " " + inputEl.value
    msg.append(para)

    const span = document.createElement("span")
    span.textContent = "You have " + "#5000" + " " + "welcome bonus"
    msg.append(span)

    // const spans = document.createElement("p")
    // spans.textContent = "Enjoy your game!"
    // msg.append(spans)

    msg.innerHTML += `<div class="pro"> Enjoy your game! </div>`

    
    inputEl.value = " "
    // errorMessage()
    console.log(inputEl.value)
    }
}

// const emptyMessage = document.getElementById("empty-message")
// console.log(emptyMessage)

// function errorMessage() {
//     if (!inputEl.value) {
//         emptyMessage.textContent = "Input cannot be empty"
//     }
// }








// Object Test
const person = {
    name: "Dare",
    age: 20,
    country: "Nigeria"
}

const logData = () => {
    return (`${person.name} is ${person.age} years old and lives in ${person.country}`)
}

console.log(logData())

// if else

let age = 60

const ageDiscount = (age) => {
    if (age < 6) {
        return "free"
    }
    else if (age < 18) {
        return "child discount"
    }
    else if (age < 27) {
        return "student discount"
    }
    else if (age < 65) {
        return "full price"
    }
    else {
        return "senior citizen discount"
    }
}
console.log(ageDiscount(age))

let hands = ["rock", "paper", "scissors"]

const getHand = (hands) => {
   let randomIndex = Math.floor(Math.random() * 3)
   return hands[randomIndex]
}
console.log(getHand(hands))