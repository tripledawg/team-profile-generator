

//require ??

const headingCol = document.createElement('div')
const card = document.createElement('div');
const cardBody = document.createElement('div');
const cardHeading = document.createElement('h2');
const cardRole = document.createElement('img');

const email = document.createElement('p');
const id = document.createElement('p'); 
const gitHub = document.createElement('p');
const school = document.createElement('p'); 
const office = document.createElement('p');

//function to create team roster
function populateTeam() {
    headingCol.setAttribute("class", "col-12");
    cardheading.textContent = `${firstName} ${lastName} ${role}`;
    cardBody.append(id, email)
    card.append(cardBody);
    card.append(cardHeading);
    //if role == manager cardBody.append${office};
    //if role == intern cardbody.append${school};
    //if role == engineer cardbody.append${gitHub}
};


