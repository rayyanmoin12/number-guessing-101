import inquirer from 'inquirer';
console.log("Welcome to my random number generator!");
let roundNumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt([
    {
        type: "number",
        name: "guess_number",
        message: "Guess a number between 1 - 4: "
    }
]);
if (userInput.guess_number === 3) {
    console.log("You have guessed 3");
}
else if (userInput.guess_number === 1) {
    console.log("You have guessed 1");
}
else {
    console.log("You have guessed either 2 or 4!");
}
if (userInput.guess_number === roundNumber) {
    console.log("Congratulations! Spot on!");
}
else {
    console.log(`We apologize, but your guess was incorrect.\nThe correct answer is ${roundNumber}`);
}
let secondInput = await inquirer.prompt([
    {
        type: "list",
        name: "pick_2_numbers",
        choices: ["2,3", "4,1", "2,2", "3,4"],
        message: "Pick 2 numbers you want to multiply"
    }
]);
if (secondInput.pick_2_numbers === "2,3") {
    console.log(2 * 3);
}
else if (secondInput.pick_2_numbers === "4,1") {
    console.log(4 * 1);
}
else if (secondInput.pick_2_numbers === "2,2") {
    console.log(2 * 2);
}
else {
    console.log(3 * 4);
}
