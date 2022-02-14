const countPositiveAndSumNegative = arr => {
   if (!arr || arr.length === 0) {
      return []
   }
   let countOfPositive = 0
   let sumOfNegative = 0
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
         countOfPositive += 1
      } else if (arr[i] < 0) {
         sumOfNegative += arr[i]
      }
   }

   return [countOfPositive, sumOfNegative]
}


console.log(countPositiveAndSumNegative([]));