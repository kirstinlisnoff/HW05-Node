// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description explaining your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps for installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide instructions for usage of the application.",
        name: "usage"
    },
    {
        type: "input",
        message: "Pleast list any contributors to the application.",
        name: "credits"
    },
    {
       type: "list",
       message: "Please select the licensing option best suited to your project.",
       name: "license",
       choices: ["MIT","GPL","AFL","ISC","None"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync('README.txt', data, (err) => {
        err ? console.error(err) : console.log('README Created!');
      });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        writeToFile("README.txt", `
          #${response.title} 
            `)
    })
}

// Function call to initialize app
init();
