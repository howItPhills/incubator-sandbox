const convertToBrackets = str => {
   let newStr = ''
   str = str.toLowerCase()
   for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
         newStr += '('
      } else {
         newStr += ')'
      }
   }
   return newStr


   //SECOND OPTION

   // let newArr = []
   // const arr = str.toLowerCase().split('')
   // for (let i = 0; i < arr.length; i++) {
   //    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
   //       newArr.push('(')
   //    } else {
   //       newArr.push(')')
   //    }
   // }
   // return newArr.join('')
}

console.log(convertToBrackets('Strikes'));