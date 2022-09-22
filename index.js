// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Enter your project's title.",
  },
  {
    type: "input",
    name: "Description",
    message: "Write a short description of your project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "Provide the command to be used for installation.",
  },
  {
    type: "input",
    name: "Test",
    message: "Provide the command to be used to run tests.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide any instructions regarding use of the repository.",
  },
  {
    type: "input",
    name: "Contributions",
    message: "Provide information regarding contributing to the repository.",
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
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}))
  })
}

// Function call to initialize app
init();
