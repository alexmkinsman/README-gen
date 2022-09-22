// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project",
    message: "Enter your project's title.",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide the command to be used for installation.",
  },
  {
    type: "input",
    name: "test",
    message: "Provide the command to be used to run tests.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide any instructions regarding use of the repository.",
  },
  {
    type: "input",
    name: "contribute",
    message: "Provide information regarding contributing to the repository.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  
  {
    type: "list",
    name: "license",
    message: "Choose the license which best fits your project.",
    choices: ["MIT", "Apache", "Boost"]
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync()
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
