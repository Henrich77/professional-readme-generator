// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const fs= require('fs');


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message:' what is the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message:' give a brief description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message:' what are the requirements to install the project'
    },
    {
        type: 'list',
        name: 'License',
        message:' select a license',
        Choices: ['MIT', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License','ISC']
    },
    {
        type: 'input',
        name: 'username',
        message:' what is your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message:' what is your email address'
    },

        


]

// TODO: Create a function to write README file
.then(data => {
    function writeToFile(fileName, data) {
        fileName = 'README.md'
        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('yessirrrr!'))
    }
 

})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
