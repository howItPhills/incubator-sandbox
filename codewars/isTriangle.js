const isTriangle = (...args) => {
   const sorted = args.sort((a, b) => a - b)
   if (sorted.find(n => n < 0)) {
      return false
   }
   if (sorted[0] + sorted[1] > sorted[2]) {
      return true
   }
   return false
}


console.log(isTriangle(1, 2, 2))
