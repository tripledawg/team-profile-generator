const inquirer = require('inquirer');
const fs = require('fs');

function init() {
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
                choices: ['intern', 'engineer', 'manager']
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
//if manager 
// {
//     type: 'input',
//     name: 'office',
//     message: 'Where is this manager\s office?'
// }
