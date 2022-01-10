const inquirer = require('inquirer');
const fs = require('fs');

// user is manager with :manager’s name, employee ID, email address, and office number
function managerInit() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the team manager\'s first name?'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is team manager\'s last name?'

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team manager\'s ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team manager\'s email?'
            },
            {
                type: 'input',
                name: 'office number',
                message: 'What is the team manager\'s office number?'
            },

        ])
};

function employeeInit() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the team member\'s first name?'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is team member\'s last name?'

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team member\'s ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team member\'s email?'
            },
            {
                type: 'checkbox',
                name: 'role',
                message: 'What is the team member\'s role at your company?',
                choices: ['intern', 'engineer',]
            },
        ])
};

// if intern  
// {
//     type: 'input',
//     name: 'school',
//     message: 'What is the name of the intern\s school?'
// }
//if engineer
// {
//     type: 'input',
//     name: 'gitHub',
//     message: 'What is the engineer's GitHub username?'
// }

