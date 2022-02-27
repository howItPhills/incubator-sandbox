const checkoutTime = (customers, n) => {
   if (!customers.length) {
      return 0
   } else if (customers.length === 1) {
      return customers[0]
   } else if (customers.length < n) {
      return customers.sort((a, b) => b - a)[0]
   } else if (customers.length > n) {
      return customers.reduce((acc, curr) => acc + curr, 0) / n
   }
}

console.log(checkoutTime([20, 4, 35, 17, 38, 48, 26, 48, 19, 48, 28, 32, 9, 48, 13, 15, 20, 43, 40, 49, 6, 38], 6))