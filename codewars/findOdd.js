const findOdd = arr => {
   for (let i = 0; i < arr.length; i++) {
      if (arr.filter(n => n === arr[i]).length % 2) {
         return arr[i]
      }
   }
   // A.reduce((a, b) => a ^ b)
}

// console.log(findOdd([1, 1, 2, 2, 2, 2, 2]));

// console.log(5 ^ 2);