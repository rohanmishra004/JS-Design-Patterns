class Realsubject{
    request() {
        console.log('RealSubject: Handling Request');
    }
}

//Proxy - the proxy object that controls access to RealSubject

class Proxy{
    constructor(realsubject) {
        this.realsubject = realsubject
    }

    request() {
        if (this.checkAccess()) {
            this.realsubject.request();
            this.logAccess();
        } else {
            console.log(`Proxy access denied`)
        }
    }

    checkAccess() {
        return true
    }

    logAccess() {
        console.log(`Proxy : logging the time of request`)
    }
}

const realSubject = new Realsubject();
const proxy = new Proxy(realSubject);

proxy.request();