let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);
// console.log(generateTarget());

const compareGuesses = (user, computer, target) => {
    let userDiff = Math.abs(target-user);
    let compDiff = Math.abs(target-computer);
    return compDiff >= userDiff;
}
// console.log(compareGuesses(5, 3, 4));

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;

