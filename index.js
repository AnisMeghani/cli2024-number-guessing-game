#! /usr/bin/env node
import inquirer from 'inquirer';
// 1) computer will generate a random number
// 2) user input for guessing number
//compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1); // dice bana dys ;)
console.log('Welcome to Number Guessing Game');
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You guessed the wrong number");
}
