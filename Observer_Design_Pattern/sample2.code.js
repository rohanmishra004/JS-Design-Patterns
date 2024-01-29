class Subject{
    constructor() {
        this.observers = []; //Array to hold observers
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`${this.name} received data::${data}`)
    }
}

const subject = new Subject();

const obs1 = new Observer('Obsverser 1')
const obs2 = new Observer('Obsverser 2')

//register observer to the subject
subject.addObserver(obs1)
subject.addObserver(obs2)


//notify observers
subject.notifyObservers('Hello World')


subject.removeObserver(obs1);

subject.notifyObservers("How are you?");