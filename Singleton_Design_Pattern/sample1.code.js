class Singleton{
    constructor() {
        //we are adding this condition to ensure that an instance should be created only when it does not exist

        if (!Singleton.instance) {
            this._privateVariable = 'I am a private member';
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    // Public method
    publicMethod() {
        console.log("I am a public method");
    }

    // Public variable
    get publicVariable() {
        return "I am a public variable";
    }

    // Method to access the private variable
    getPrivateVariable() {
        return this._privateVariable;
    }
}

const singletonIsnt1 = new Singleton();
const singletonIsnt2 = new Singleton();
console.log(singletonIsnt1 == singletonIsnt2) //We demonstrate that multiple instances created with new Singleton() refer to the same object by checking their equality (singletonInstance1 === singletonInstance2).


singletonIsnt1.publicMethod(); // Output: I am a public method
console.log(singletonIsnt1.publicVariable); // Output: I am a public variable
console.log(singletonIsnt1.getPrivateVariable());

singletonIsnt2.publicMethod(); // Output: I am a public method
console.log(singletonIsnt2.publicVariable); // Output: I am a public variable
console.log(singletonIsnt2.getPrivateVariable());