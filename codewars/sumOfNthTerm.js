const sumOfNthTerm = n => {
   let sum = 0
   let increment = 1
   for (let i = 0; i < n; i++) {
      sum += (1 / increment)
      increment += 3
   }
   return sum.toFixed(2)
}

console.log(sumOfNthTerm(5));