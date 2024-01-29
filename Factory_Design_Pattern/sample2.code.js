//this is the Use case for Factory Design pattern

class Employee{
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello , ${ this.name }`);
    }
}


//Define FullTime Employee subclass 

class FullTimeEmployee extends Employee{
    constructor(name) {
        super(name);
        this.type = 'full-time';
    }

    work() {
        console.log(`${this.name} works fulltime`)
    }
}

//Define Parttime Employee
class PartTimeEmployee extends Employee{
    constructor(name) {
        super(name);
        this.type = 'part-time';
    }

    work() {
        console.log(`${this.name} works part time`)
    }
}

//Create a Employee Factory that will be used 

class EmployeeFactory{
    createEmployee(name, type) {
        switch (type) {
            case 'full-time':
                return new FullTimeEmployee(name);
            case 'part-time':
                return new PartTimeEmployee(name);
            default:
                throw new Error('Invalid Employee type.');
        }
    }
}

//Usuage
const employeeFactory = new EmployeeFactory();
const fullTimeEmployee = employeeFactory.createEmployee('full-time', 'JACK');
const partTimeEmployee = employeeFactory.createEmployee('part-time', 'JILL');

fullTimeEmployee.work();
fullTimeEmployee.sayHello();

partTimeEmployee.sayHello()
partTimeEmployee.work();