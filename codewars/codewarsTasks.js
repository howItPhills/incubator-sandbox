//SORT THE ODDS
const sortOdds = (arr) => {
   const odd = arr.filter(n => n % 2).sort((a, b) => a - b)
   return arr.map(n => n % 2 ? odd.shift() : n)
}

// console.log(sortOdds([3, 2, 5, 1, 4]));


const digitize = (n) => {
   return n.toString().split('').reverse().map(item => parseInt(item))
}

console.log(digitize(3214));