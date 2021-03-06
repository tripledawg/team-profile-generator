//function takes empty array and adds manager input 
generateHtml = (data) => {

    myTeam = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            myTeam.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            myTeam.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            myTeam.push(internCard);
        }

    }
    const employeeCards = myTeam.join('')
    const generateTeam = generateMyTeamPage(employeeCards);
    return generateTeam;

}//function to generate main page without manager input data

const generateMyTeamPage = (employeeCards) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1 class="header">My Team</h1>
    </header>
    <div class="container-fluid">
    <div class="row"> 
    ${employeeCards}
    </div>
    </div>
    <script src="index.js"></script>
</body>
</html>`;
}  

//function to generate manager card with manager input
const generateManager = (manager) => {
    return `
<div class="col">
        <div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager<i><span class="material-icons">
                meeting_room
                </span></i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
}

// function to generate engineer card with manager input 
const generateEngineer = (engineer) => {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer<i><span class="material-icons">
                developer_board
                </span></i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`;
}

// function to create intern card with manager input 
const generateIntern = (intern) => {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern<i><span class="material-icons">
                backpack
                </span>
                </i></h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
      </div>
</div>`;
}

//makes this function available to index.js
module.exports = generateHtml;
