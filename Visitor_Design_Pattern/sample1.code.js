function Employee(name,salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary: function () {
        return this.salary
    },
    setSalary: function (sal) {
        this.salary = sal
    },

    //accept function allows the visitor object access to the methods
    accept: function (visitorFunction) {
        //here this refers to the employee
        visitorFunction(this)
    }
}
///////////////////////////////////////////////////////////

const devsage = new Employee('User', 10000)
// console.log(devsage.getSalary())

//extends the functionality of Employee class
//extraSalary is our visitor function
function extraSalary(emp) {
    emp.setSalary(emp.getSalary()*2)
}

devsage.accept(extraSalary)
console.log(devsage.getSalary())  //output - 20000, we get extra salary after we have modified the functionality
