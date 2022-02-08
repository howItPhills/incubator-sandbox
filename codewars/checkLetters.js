function XO(str) {
   // let countX = 0
   // let countO = 0
   // const arr = str.toLowerCase().split('')
   // for (let i = 0; i < arr.length; i++) {
   //    if (arr[i] === 'x') {
   //       countX++
   //    } else if (arr[i] === 'o') {
   //       countO++
   //    }
   // }
   // if (countX !== countO) {
   //    return false
   // }
   // return true
   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
}

console.log(XO('xxoo'))