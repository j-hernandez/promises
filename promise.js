const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve() // Change status to 'fulfilled'
    }, 2000)
  })
  
  console.log(`Promise before being resolved `, promise);
  
  setTimeout(() => {
      console.log(`Promise after being resolved`, promise);
  }, 3000)