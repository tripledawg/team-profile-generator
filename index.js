const inquirer = require('inquirer');
const fs = require('fs');//file system
const generateHtml = require('./generateHtml');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const teamMembers = [];

function managerInit() {
     inquirer

        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team manager\'s first and last name?'
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
            const { name, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log("Welcome team manager! Now let's assemble your team.");
            employeeInit();
        });
};



function employeeInit() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team member\'s first and last name?'
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
                choices: ['Intern', 'Engineer']
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of this intern\'s school?',
                when: (input) => input.role == "Intern"
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is this engineer\'s GitHub username?',
                when: (input) => input.role == "Engineer"
            },
            {
                type: 'list',
                name: 'enterAnother',
                message: 'Would you like to enter another employee?',
                choices: ['yes', 'no']
            }
        ])
        .then((employeeData) => {
            const { name, id, email, role, github, school, enterAnother } = employeeData;
            let employee;

            if (role == "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role == "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }
            teamMembers.push(employee);
            if (enterAnother == 'yes') {
                employeeInit();
            } else {
                buildTeam();
            }
        })
};


// html
const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Congratulations...")
        }
    })
};

managerInit()
    function buildTeam() {
        console.log(teamMembers);
        const pageHtml = generateHtml(teamMembers);
        writeFile(pageHtml)
    }