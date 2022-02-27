//SORT THE ODDS
const sortOdds = (arr) => {
   const odd = arr.filter(n => n % 2).sort((a, b) => a - b)
   return arr.map(n => n % 2 ? odd.shift() : n)
}

// console.log(sortOdds([3, 2, 5, 1, 4]));


const digitize = (n) => {
   return n.toString().split('').reverse().map(item => parseInt(item))
}

// console.log(digitize(3214));

const betterThanAverage = (classPoints, yourPoints) => {
   const arr = classPoints.concat(yourPoints)
   return !(Math.round(arr.reduce((acc, curr) => acc + curr) / arr.length) > yourPoints)
}

// console.log(betterThanAverage([2, 3, 4], 1));

const points = (games) => {
   // let count = 0

   // games.map(item => item.split(':')).forEach(item => {
   //    if (item[0] > item[1]) {
   //       count += 3
   //    } else if (item[0] === item[1]) {
   //       count += 1
   //    }
   // })

   // return count
   return games.reduce((acc, curr) => {
      return acc += curr[0] > curr[2] ? 3 : curr[0] === curr[2] ? 1 : 0
   }, 0)
}

// console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));



const perfectSquare = sq => sq ** 0.5 % 1 ? -1 : (sq ** 0.5 + 1) ** 2

// console.log(perfectSquare(16));

const longest = (s1, s2) => {
   // return (s1 + s2).split('').sort().filter((item, i, arr) => arr.lastIndexOf(item) === i).join('')
   return [...new Set(s1 + s2)].sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"));