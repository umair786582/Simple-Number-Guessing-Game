#! usr/bin.env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game.");
const answer = await inquirer.prompt([{
        name: "userguesser",
        type: "number",
        message: "Please Guess a Number",
    },
]);
if (answer.userguesser === randomNumber) {
    console.log("Congratulation! You Guess A Right Number");
}
else {
    console.log("Sorry You Guess A Wrong Number");
}
