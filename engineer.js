const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor(gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
}
