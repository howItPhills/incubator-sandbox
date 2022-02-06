const sum = (arr, n) => {
   if (n <= 0) {
      return 0;
   } else {
      return sum(arr, n - 1) + arr[n - 1]
   }
}
const multiply = (arr, n) => {
   if (n <= 0) {
      return 1;
   } else {
      return multiply(arr, n - 1) * arr[n - 1]
   }
}

// console.log(multiply([1, 2, 3, 4], 4))


const countdown = (n) => {
   if (n < 1) {
      return []
   } else {
      const countArray = countdown(n - 1)
      countArray.unshift(n)
      return countArray
   }
}

// console.log(countdown(10))


const rangeOfNumbers = (startNum, endNum) => {
   let rangeArray
   if (startNum === endNum) {
      return rangeArray = [startNum]
   } else if (startNum < endNum) {
      rangeArray = rangeOfNumbers(startNum, endNum - 1)
      rangeArray.push(endNum)
      return rangeArray
   } else if (startNum > endNum) {
      return "start number should be over end number"
   }
   return rangeArray
}

console.log(rangeOfNumbers(2, 5))