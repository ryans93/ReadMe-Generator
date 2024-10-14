// TODO: Include packages needed for this application
import inquirer from "inquirer";
import { promises as fs } from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter project title: ",
        validate: (answer) => {
            return answer === "" ? false : true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter project description: "
    }, 
    {
        type: 'input',
        name: 'install',
        message: "Enter installation instructions: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter usage information: "
    }, 
    {
        type: 'input',
        name: 'contribution',
        message: "Enter contribution guidelines: "
    }, 
    {
        type: 'input',
        name: 'testing',
        message: "Enter testing instructions: "
    }, 
    {
        type: 'list',
        name: 'license',
        message: "Enter project license: ",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }, 
    {
        type: 'input',
        name: 'github',
        message: "Enter github username: ",
        validate: (answer) => {
            return answer === "" ? false : true;
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Enter email address: ",
        validate: (answer) => {
            return answer.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) === null ? false : true;
        }
    }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try {
        await fs.mkdir("output");
        console.log("Output folder created.");
    }
    catch {
        console.log("Output folder already exists.");
    }
    finally {
        fs.writeFile(fileName, generateMarkdown(data))
            .then(err => {
                err ? console.error(err) : console.log("Readme generated successfully!");
            })
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("./output/README.md", response);
    })
}

// Function call to initialize app
init();
