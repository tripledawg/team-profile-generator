const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const teamMembers = [];

function managerInit() {
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
        .then((managerAnswers) => {
            const { firstName, lastName, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(firstName, lastName, id, email, officeNumber);
            teamMembers.push(manager);
        });
};



function employeeInit() {
    return inquirer
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
                choices: ['intern', 'engineer']
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of this intern\'s school?',
                when: (input) => input.role == "intern"
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is this engineer\'s GitHub username?',
                when: (input) => input.gitHub == "engineer"
            },
            {
                type: 'list',
                name: 'enterAnother',
                message: 'Would you like to enter another employee?',
                choices: ['yes', 'no']
            }
        ])
        .then(employeeData => {
            let { firstName, lastName, id, email, role, github, school, enterAnother } = employeeData;
            let employee;

            if (role == "Engineer") {
                employee = new Engineer(firstName, lastName, id, email, github);

                console.log(employee);

            } else if (role == "Intern") {
                employee = new Intern(firstName, lastName, id, email, school);

                console.log(employee);
            }

            teamMembers.push(employee);

            if (enterAnother == 'yes') {
                employeeInit(teamMembers);
            } else {
                return teamMembers;
            }
        })
};


// html
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Congratualtions...")
        }
    })
};

managerInit()
    .then(employeeInit)
    .then(teamMembers => {
        console.log(teamMembers);
        return generateHtml(teamMembers);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });