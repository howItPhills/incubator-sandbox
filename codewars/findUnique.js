const findUnique = arr => {
   //FIRST OPTION - most efficient

   let obj = {}

   for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
         obj[arr[i]] = 1
      } else {
         obj[arr[i]] += 1
      }
   }
   for (let key in obj) {
      if (obj[key] === 1) {
         return +key
      }
   }

   // SECOND OPTION - worst for performance

   // for (let i = 0; i < arr.length; i++) {
   //    if (arr.filter(n => n === arr[i]).length === 1) {
   //       return arr[i]
   //    }
   // }

   // THIRD OPTION

   // return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
}

console.log(findUnique([1, 1, 1, 2]));