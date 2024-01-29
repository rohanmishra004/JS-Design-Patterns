function VehicleFactory() { }

//**We define a VehicleFactory function that acts as our factory. It has a createVehicle method that takes a type parameter and returns a new instance of the specified type. */
VehicleFactory.prototype.createVehicle = (type) => {
    switch (type) {
        case 'car':
            return new Car();
        case 'bike':
            return new Bike();
        default:
            throw new Error('Invalid vehicle type specified.');
    }
}

//Define car constructor

function Car() {
    this.type = 'car';
    this.drive = function () {
        console.log('Driving car...')
    }
}

function Bike() {
    this.type = 'bike';
    this.drive = function () {
        console.log('Driving a bike....')
    }
}

//Usuage
const vehicleFactory = new VehicleFactory(); //Create an instance of VehicleFactory
const myCar = vehicleFactory.createVehicle('car');
const myBike = vehicleFactory.createVehicle('bike');


myCar.drive()
myBike.drive();

//*This pattern allows for easy extension by adding new constructors and updating the factory without modifying existing client code, promoting flexibility and maintainability in your application.* /