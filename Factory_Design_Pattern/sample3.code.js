// function Developer(name) {
//     this.name = name;
//     this.type = 'Developer'
// }

// function Tester(name) {
//     this.name = name;
//     this.type = 'Tester'
// }

// function EmployeeFactory(name, type) {
//     this.create = (name,type) => {
//         switch (type) {
//             case 1:
//                 return new Developer(name)
//             case 2:
//                 return new Tester(name)
//         }
//     }
// }

// function say() {
//     console.log(`Hi my name is ${this.name} and I am a ${this.type}`)
// }

// //instance of factory
// const employeeFactory = new EmployeeFactory();

// const employees = []

// employees.push(employeeFactory.create('User1', 1))
// employees.push(employeeFactory.create('User2', 2))
// employees.push(employeeFactory.create('User3', 2))


// employees.forEach(emp => {
//     say.call(emp)
// })


//Write above code as class

class Employee{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    say() {
        console.log(`${this.name} is a ${this.type}`)
    }
}

class Developer extends Employee{
    constructor(name) {
        super(name,'Developer')
    }
}


class Tester extends Employee{
    constructor(name) {
        super(name,'Tester')
    }
}

class EmployeeFactory1{
    create(name, type) {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
            default:
                console.log('value provided is incorrect')
        }
    }
}

const emp1Fact = new EmployeeFactory1();
const emps = []


try {
    emps.push(emp1Fact.create('User',1))
    emps.push(emp1Fact.create('NewUser1',1))
    emps.push(emp1Fact.create('New User3',2))
    emps.push(emp1Fact.create('New User4', 4))

    emps.forEach(emp => emp.say());
}
catch (error) {
    console.log(error.message)
}
