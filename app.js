//GAME VALUES
let min = 20,
  max = 50,
  winNum = randomNumber(min,max),
  guessNum = 3;
//UI ELEMENTS
let minNum = document.querySelector(".min"),
  maxNum = document.querySelector(".max"),
  numberInput = document.querySelector(".numberInput"),
  submit = document.querySelector(".submit"),
  message = document.querySelector(".msg");

//ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

//SUBMIT BUTTON GUESSING NUMBER
submit.addEventListener("click", () => {

  let guess = parseInt(numberInput.value);

  // VALIDATE
  if (isNaN(guess) || guess < min || guess > max) {

    setMessage(`Please enter a number between ${min} and ${max}`, "red");

  } else {

    // CHECK WINNING
    if (guess === winNum) {
      // GAME OVER - WON
      gameOver(true,`Correct Number Guessed. You win!`);
      
    } else {
      // GAME LOST 
      guessNum -= 1;

        if (guessNum < 1) {
          // GAME OVER - LOST
          gameOver(false,`Sorry, You lose! The correct number was ${winNum}`);

        } else {

          // GAME CONTINUES - ANSWER WRONG
          numberInput.style.borderColor = 'red';
          numberInput.value = "";
          setMessage(`${guess} is not correct ${guessNum} guesses left`, 'red');

        }

    }
  }

});


function gameOver(won,msg){

  let color;
  won === true ? color = "green" : color = "red";
  // DISABLE INPUT
  numberInput.disabled = true;
  // CHANGE BORDER COLOR 
  numberInput.style.borderColor = color;
  // MESSAGE
  setMessage(msg,color);
  // PLAY AGAIN 
  submit.textContent = "Play Again";
  submit.className += " start"; // ADD SPACE BEFORE THE CLASS NAME YOU WANT TO APPEND OR ELSE THE NAME WILL 
                                // MERGE WITH THE PREVIOUS CLASS NAME
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

newBtn = document.querySelector(".btn");
newBtn.addEventListener("mousedown", (e) => {
  if(e.target.classList.contains("start")){

    window.location.reload();
  }
});


function randomNumber(min,max){

  let random = (Math.floor(Math.random()*(max-min+1)+min));
  console.log(random);
  return random;
}
