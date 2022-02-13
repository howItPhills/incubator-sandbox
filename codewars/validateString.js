const validateString = str => {
   if (str.length !== 4 && str.length !== 6) {
      return false
   }
   const arr = str.split('')
   for (let i = 0; i < arr.length; i++) {
      if (!parseInt(arr[i]) && arr[i] !== "0") {
         return false
      }
   }
   return true
}


// console.log('0' !== 0);

console.log(validateString('000a'));