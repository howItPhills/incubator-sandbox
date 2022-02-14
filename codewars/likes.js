const likes = arr => {
   const len = arr.length
   if (!arr || arr === []) {
      return 'no one likes this'
   } else if (len === 1) {
      return `${arr[0]} likes this`
   } else if (len === 2) {
      return `${arr[0]} and ${arr[1]} like this`
   } else if (len === 3) {
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
   } else {
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} more like this`
   }
}

console.log(likes(['Jake', 'Mike', 'Kelly', 'Kendra']));