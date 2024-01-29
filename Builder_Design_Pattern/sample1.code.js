function Person(name, weight, height, gender) {
    this.name = name;
    this.weight = weight
    this.height = height;
    this.gender = gender;
}

//Person Builder
function PersonBuilder(name, gender) {
    this.name = name;
    this.gender = gender;


    //to add weight and height we can use setters and getters
    this.setWeight = function (weight) {
        this.weight = weight;
        return this;
    }

    this.setHeight = function (height) {
        this.height = height;
        return this;
    }

    //now we will use the builder function to construct the object
    //this is the construction part handled by the build method
    this.build = function () {
        return new Person(this.name, this.weight, this.height, this.gender)
    }
}









// const person = new Person('User', 6,7.2,"M")
//we can call setWeight and setHeight on this Person Builder method
const devSage = new PersonBuilder('User', 'male').setWeight(20).setHeight(4).build()
console.log(devSage)