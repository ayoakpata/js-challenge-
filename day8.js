//Magic Eight Ball randomly generates questions based on defined/in build answers

//user name set to empty
const userName = '';

//ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}`) : console.log(`Hello!`);

//question the user wants to ask the Magic Eight Ball
const userQuestion = 'will i be rich?';

console.log(`${userName}, you just asked this question - ${userQuestion}`);

//generate a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

//create an empty variable
let eightBall = '';

//switch statement takes in randomNumber & assigns eightBall a reply that Magic Eight Ball would return

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'nil';
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
