
// When new Promise runs
// resolve gets assigned to this .then property
// and reject gets assigned to its .catch
// so you can promise.then() and promise.catch()
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject() // Change status to 'fulfilled'
    }, 2000)
  })
  
  console.log(`Promise before being resolved `, promise);
  
  setTimeout(() => {
      console.log(`Promise after being resolved`, promise);
  }, 3000)


// set up then and catch named functions

function thenFunction () {
  return 'then';
}

function catchFunction () {
  return 'catch';
}

let newPromise = {
  then: thenFunction,
  catch: catchFuncion
}

newPromise.then();
newPromise.catch();
