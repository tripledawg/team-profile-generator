const Employee = require('./employee');

class Manager extends Employee {
  constructor(firstName, lastName, id, email, office) {
    super(firstName, lastName, id, email);
    this.office = office;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;