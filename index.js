const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require ('./generateHtml');

const managerInit = function managerInit() {
   return inquirer
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
                name: 'officeNumber',
                message: 'What is the team manager\'s office number?'
            },

        ])
        .then((answers) => {
            console.log(answers);
        });
};

managerInit()
    .then(data => {
        console.log('Welcome manager!')
        employeeInit();
    })
    .catch(err => {
        console.log(err)
    });

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
                message: 'What is the team member\'s last name?'

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
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of this intern\s school?',
                when: (input) => input.role === "intern",
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is this engineer\'s GitHub username?',
                when: (input) => input.gitHub === "Engineer"
            }
        ])
};


