function onSuccess() {
    console.log('Success!');
}

function onError() {
    console.log('Something went wrong');
}

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject();
    }, 2000);
});

promise.then(onSuccess);
promise.catch(onError);