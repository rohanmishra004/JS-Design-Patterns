//OBSERVER_DESIGN PATTERN

function Subject() {
    this.observers = []  //array of functions that are monitoring Subject, so if there is any change they can be updated
}


Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn)
    },
    subscribe: function (fntoRemove) {
        this.observers = this.observers.filter(
            fn => {
                if (fn != fntoRemove) {
                    return fn
                }
            }
        )
    },
    //this function will notify all the observers to take action
    fire: function () {
        this.observers.forEach(fn => {
            fn.call()
        })
    }


}

const subject1 = new Subject();

function observer1() {
    console.group('Server 1 is Firing')
}

function observer2() {
    console.group('Server  1 is Firing')
}

subsject1subscribe.observer1(observer1);
subsject2subscribe.observer1(observer2);


subject1.fire()



