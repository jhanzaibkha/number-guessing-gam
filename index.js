#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t welcome to codewithJazzy CLI Number guessing game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(number limit form 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guess a correct number.");
}
else {
    console.log("sorry, you guess a wrong number");
}
;
