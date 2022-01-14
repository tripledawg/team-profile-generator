const Employee = require('./employee');

class Engineer extends Employee {
  constructor(gitHub) {
    super(firstName, lastName, id, email);
    this.gitHub = gitHub;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer; 