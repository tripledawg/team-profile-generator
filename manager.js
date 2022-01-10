const Employee = require('./employee.js');

class Manager extends Employee {
  constructor(office) {
    super(name, id, email);
    this.office = office;
  }
}