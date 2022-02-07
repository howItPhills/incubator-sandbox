const copyArray = (arr, n) => {
   let newArray = [];

   // while (n >= 1) {
   //    newArray.push([...arr])
   //    n--
   // }

   for (n; n >= 1; n--) {
      newArray.push([...arr])
   }

   return newArray
}

// console.log(copyArray([1, 2, 3], 3)) // Copying array n times

