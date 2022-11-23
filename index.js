// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is your GitHub username?',
        name: 'github'
    },
    {
        type:'input',
        message:'What is your email address?',
        name: 'email'
    },
    {
        type:'input',
        message:'Please write a short description of your project: ',
        name: 'description'
    },
    {
        type:'list',
        message:'What kind of license should your project have?',
        choices:['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
        name: 'license'
    },
    {
        type:'input',
        message:'What command should be run to install dependencies?',
        name: 'install'
    },
    {
        type:'input',
        message:'What command should be entered to run tests?',
        name: 'test'
    },
    {
        type:'input',
        message:'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to the repo?',
        name: 'contributing'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();