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
                message: 'What is the team manager\'s first and last name?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter the team manager's name to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team manager\'s ID number?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter the team manager's ID number to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team manager\'s email?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter the team manager's email to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team manager\'s office number?',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter the team manager's office number to continue.");
                        return false; 
                    }
                }
            },

        ])
        .then((managerAnswers) => {
            const { name, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log("Welcome " + managerAnswers.name + "! Now let's assemble your team.");  ///how to insert name??
            employeeInit();
        });
};



function employeeInit() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter a team member\'s first and last name.',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter the team member's name to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'PLease enter this team member\'s ID number.',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter this team member's ID number to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter this team member\'s email.',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter this team member's email to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'role',
                message: 'PLease enter the team member\'s role at your company.',
                choices: ['Intern', 'Engineer']
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where does this intern attend school?',
                when: (input) => input.role == "Intern",
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter this intern\'s school name to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is this engineer\'s GitHub username?',
                when: (input) => input.role == "Engineer",
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log ("Please enter this engineer's gitHub username to continue.");
                        return false; 
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'enterAnother',
                message: 'Would you like to enter another employee?',
                choices: ['yes', 'no']
            },    
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
            console.log("Congratulations, your team has been assembled! Click on index.html to view your all-star team!")
        }
    })
};

managerInit()
    function buildTeam() {
        console.log(teamMembers);
        const pageHtml = generateHtml(teamMembers);
        writeFile(pageHtml)
    }