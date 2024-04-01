#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "What is your Name? ", type: "string", name: "Yourname" },
  {
    message: "Please Enter First Number: ",
    type: "number",
    name: "firstnumber",
  },
  {
    message: "Please Enter Second Number:",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "Select one of the operator:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//   Conditional Statements

if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("Please select valid operator");
}
