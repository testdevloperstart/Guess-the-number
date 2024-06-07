// const { endWith } = require("rxjs/operators");

// const { Button } = require("bootstrap");

let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber)

const userInput = document.querySelector(".userInput");
const submit = document.querySelector(".submitInput");
const previesGuess = document.querySelector(".guesses")
const RemainingGuess = document.querySelector(".lastResult");
const LowroHi = document.querySelector(".LoworHi");
const statrOver = document.querySelector(".reusltParas");
const p = document.createElement('p');

// this is a array where we keep trake of numbers guessed by the user will be stored here
let prevGuesses = []
// this will be used to count the number of attemptes user did. only 10 attempts are allowed
let numguesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const Guess = parseInt(userInput.value)
        console.log(Guess)
        validateGuesses(Guess);
    })
}

// here we validate the number given by user
function validateGuesses (Guess){
    if(isNaN(Guess)){
        alert("please enter a number")
    }else if(Guess<1){
        alert("Please enter a number greater then 1")
    }else if(Guess>100){
        alert("please enter a number less then or equal to 100")
    }else{
        prevGuesses.push(Guess)
        if(numguesses === 11){
            CleanGuess(Guess)
            displaymessage(`Game Over . Random Number was ${randomNumber}`)
            EndGame()
        }else{
            CleanGuess(Guess)
            checkGuess(Guess)
        }
    }

}
// here we print wether the value is low, high or is currect
function checkGuess(Guess){

    if(Guess === randomNumber){
        displaymessage("you guessed it right")
        EndGame()
    }else if( Guess > randomNumber){
        displaymessage("Guess is too high")
    }else if( Guess < randomNumber){
        displaymessage("Guess is too low")
    }
}

// this clean the previes value and updates prevGuesses array
function CleanGuess (Guess){
    userInput.value = " "
    previesGuess.innerHTML += `${Guess}, `
    numguesses++;
    RemainingGuess.innerHTML = `${11- numguesses}`

}


// we do all the DOM manupulation here 
function displaymessage(message){

    LowroHi.innerHTML = `${message}`

}

function EndGame(){
    userInput.value ="";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    // p.innerHTML = '<h2 id="newgame" style=" border:solid 1px black">Start new Game</h2>';
    p.innerHTML = '<button class="newgame" >start again</button';
    statrOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newgamestart = document.querySelector(".newgame")
    newgamestart.addEventListener('click', function(e){
        randomNumber= parseInt(Math.random()*100+1)
        prevGuesses =[]
        numguesses = 1
        previesGuess.innerHTML = " "
        RemainingGuess.innerHTML = `${11- numguesses}`
        userInput.removeAttribute('disabled')
        statrOver.removeChild(p)
        playGame = true
    })
}


 