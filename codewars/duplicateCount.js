function duplicateCount(text) {
   // 1st option
   let obj = {}

   text
      .toLowerCase()
      .split('')
      .filter((item, index, arr) => arr.indexOf(item) !== arr.lastIndexOf(item))
      .forEach(item => {
         if (!obj[item]) {
            obj[item] = 1
         } else {
            obj[item] += 1
         }
      })

   return Object.keys(obj).length


   //Second option

   // return text
   //    .toLowerCase()
   //    .split('')
   //    .filter((item, index, arr) => arr.indexOf(item) === index && arr.lastIndexOf(item) !== index)
   // .length

   // Third option
   // return text.toLowerCase().split('').sort().join('').match(/([^])\1+/g)
}


console.log(duplicateCount('abceedd'));