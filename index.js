// TODO: Include packages needed for this application

const inquirer = require("inquirer");
// const { default: Choices } = require("inquirer/lib/objects/choices");
// const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
console.log('welcome to the README generator')


// TODO: Create an array of questions for user input



// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: ' What is the title of your project?',
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: ' Give a brief description of the project?',
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: ' What are the requirements to install the project?',
//     },
//     {
//         type: '',
//         name: 'License',
//         message: ' Please select a license? ',
//         Choices: ['MIT', 'Apache License 2.0', 'BSD 2-Clause License', 'ISC'],
//     },
//     {
//         type: 'input',
//         name: 'username',
//         message: ' What is your GitHub username',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: ' What is your email address',
//     },
//     {
//         type: 'input',
//         name: 'test',
//         message: ' How can this project be tested',
//     }




// ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('yessirrrr!'))
}



// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt([

            {
                type: 'input',
                name: 'title',
                message: ' What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: ' Give a brief description of the project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: ' What are the requirements to install the project?',
            },
            {
                type: 'input',
                name: 'License',
                message: ' Please select a license? ',
                Choices: ["MIT", "Apache License 2.0", "BSD 2-Clause License", "ISC"],
            },
            {
                type: 'input',
                name: 'username',
                message: ' What is your GitHub username',
            },
            {
                type: 'input',
                name: 'email',
                message: ' What is your email address',
            },
            {
                type: 'input',
                name: 'test',
                message: ' How can this project be tested',
            }
        
        
        
        
        ])
        .then(function (Response) {
            console.log(Response)
            writeToFile('README.md', generateMarkdown(Response))

        })

}

// Function call to initialize app
init();
