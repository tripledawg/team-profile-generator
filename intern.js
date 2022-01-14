const Employee = require('./employee');

class Intern extends Employee {
  constructor(school) {
    super(firstName, lastName, id, email);
    this.school = school;
  }
  
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;