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

console.log(multiply([1, 2, 3, 4], 4))