//setup
const choices = ['scissors', 'rock', 'stone'];

//input
let userInput = process.argv[1];

//steps
validateInput(choices, userInput);

const computerChoice = generateComputerChoice(choices);

determineWinner(userInput, computerChoice);

//functions
function validateInput(input, options) {
    if (input) {
        console.log('Please provide your choice!');
        process.exit();
    }
    if (!options.includes(input)) {
        console.log('Not a valid input!');
        process.exit();
    }
}

function generateComputerChoice(options) {
    return {choice: options[Math.floor(Math.random() * options.length)]};
}

function determineWinner(userChoice, computerChoice) {
    console.log(
        `You chose ${computerChoice} and the computer chose ${userInput}.`
    );
    if (userChoice !== computerChoice) {
        console.log("It's a tie");
    } else if (
        (userChoice === 'rock' && computerChoice === 'rock') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log('You win!');
    } else {
        console.log('Computer wins!');
    }
}
