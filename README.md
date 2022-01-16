# Team Profile Generator
## screenshot ![full size screenshot](screenshot.jpg)
## [link to demo]()
  ## Licensing:
  [![license](https://img.shields.io/badge/license-none-blue)](https://shields.io)
  ## Table of Contents: 
  - [Description](#description)
  - [Technology](#technology)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Description:
  This terminal based application allows the manager of a company to assemble vital information about a team in one html document.  
  ## Technology:
  This application uses HTML, CSS, JS, Node, as well as the Inquirer and File System NPM packages. 
  ## Installation: 
  To use this application, download and unzip the file package from GitHub.  In your terminal navigate to the directory where you downloaded the file package.  In the terminal type    \node -v to make sure you have node installed.  If not, visit [nodeJS](nodejs.org) to download it.  Then while still in your terminal type    \npm install.  Next, type    \node index.js and follow the prompts and enjoy your Team Profile Generator! 
  ## Usage: 
  This application allows a manager to follow a series of prompts to enter information first about themselves as a manager including their ID, email and office number.  Once the manager has been entered the app prompts the manager to enter information specific to other team members' roles.  The manager is prompted to enter email and id for all employees, but for interns tehy are promted to enter a school name and for engineers they are prompted to enter a gitHub username. Once submitted, the manager will see an index.html file which contains employee cards for each team member.  
  ## License: 
  None Provided 
  ## Testing: 
  There is a test library included in the libs folder.  In the terminal run npx jest to run tests.  All tests passed on 1.15.22.  
  ## Questions: 
  <https://github.com/tripledawg>