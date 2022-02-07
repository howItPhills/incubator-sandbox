const myPromise = new Promise((resolve, reject) => {
   const condition = true
   if (condition) {
      setTimeout(() => {
         resolve('We got the data')
      }, 3000);
   } else {
      reject('We didnt get anything')
   }
})

console.log(myPromise
   .then(result => console.log(result))
   .catch(error => console.log(error)))