function getNewPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}

function log1(){
    console.log('Step 1');
}

function log2() {
    console.log('Step 2');
}

function log3(){
    console.log('Step 3');
    throw new Error();
}

function catchError() {
    console.log('An error occurred');
}

getNewPromise() 
    .then(log1) //returns a new promise
    .then(log2) // returns a new promise
    .then(log3) // returns an error that gets caught...
    .catch(catchError); //right here

fetch('url')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });