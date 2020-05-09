//Rock, Paper, or Scissors

// function to accept user input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  //statement to check againt user input
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    console.log('input error');
  }
};

//computer generates a random number
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'follow instructions';
      break;
  }
}

//determine the winner/loser
function determineWinner(userChoice, computerChoice) {
  //checs if game is tied
  if (userChoice === computerChoice) {
    return 'the game is a tie';
  }

  //paper wins
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won';
    } else {
      return 'you are a winner';
    }
  }

  //scissors wins
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won';
    } else {
      return 'you are a winner';
    }
  }

  //rock wins
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won';
    } else {
      return 'you are a winner';
    }
  }
}
//console.log(determineWinner('paper', 'rock'));

//display game results
const playGame = () => {
  const userChoice = getUserChoice('rock');

  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

//start game
playGame();
