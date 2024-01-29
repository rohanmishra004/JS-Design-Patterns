//retry function


function retryOperation() {
    //keep track of retry
    let currentTry = 0
    let maxRetry = 3
    while (true) {
        //with this we can implement that once our code succeeds we can break out of the loop of retries
        try {
            externalServiceCall();
            console.log('Success')
            break;
        } catch (error) {
            currentTry++
            console.log('Failed attempt :', currentTry)
            if (currentTry >= maxRetry) {
                console.log('retry max reached. Exiting');
                break;
            }
        }
    }
}


function externalServiceCall() {
    console.log('Calling external service')
    let shouldPass = Math.random() < 0.5;
    if (shouldPass) {
        return true
    } else {
        throw 'Failure'
    }
}

retryOperation();