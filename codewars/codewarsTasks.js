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

// console.log(longest("aretheyhere", "yestheyarehere"));

function removeChar(str) {
   // return str.substring(1, str.length - 1)
   return str.slice(1, -1)
};

// console.log(removeChar('longest'));

const uniqueInOrder = (iterable) => {
   return Array.from(iterable).filter((l, i, arr) => arr.lastIndexOf(l))
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));


var isSquare = function (n) {
   return n >= 0 ? !(Math.sqrt(n) % 1) : false;
}

// console.log(isSquare(0));

function center(strng, width, fill = ' ') {
   strng.split(' ')
}

// console.log(center('aa', 4, '_'))

function wrap(value) {
   return {
      value: value
   };
}

// console.log(wrap("my_wrapped_string"));

function encode(string) {
   return string.split('').map(l => {
      switch (l) {
         case 'a':
            return l = 1
         case 'e':
            return l = 2
         case 'i':
            return l = 3
         case 'o':
            return l = 4
         case 'u':
            return l = 5
      }
      return l
   })
      .join('')
}

function decode(string) {
   return string.split('').map(l => {
      switch (l) {
         case '1':
            return l = 'a'
         case '2':
            return l = 'e'
         case '3':
            return l = 'i'
         case '4':
            return l = 'o'
         case '5':
            return l = 'u'
      }
      return l
   })
      .join('')
}

// console.log(encode('Hello'));
// console.log(decode('h2ll4'));

function explode(x) {
   let arr = []
   let score
   if (x.some(item => typeof item === 'number')) {
      score = x.filter(item => typeof item === 'number').reduce((acc, curr) => acc + curr)
      for (let i = 0; arr.length < score; i++) {
         arr.push(x)
      }
      return arr
   } else {
      return 'Void!'
   }
}

// console.log(explode(['a', 'b', 3]));


function powersOfTwo(n) {
   const arr = []
   // let i = 1;
   // do {
   //    arr.push(i)
   //    i *= 2
   // } while (arr.length - 1 < n)
   for (let i = 0; i <= n; i++) {
      arr.push(Math.pow(2, i))
   }
   return arr
}

// console.log(powersOfTwo(3));

function lovefunc(flower1, flower2) {
   return !!((flower1 - flower2) % 2)
}

// console.log(lovefunc(3, 1));

function pillars(num_pill, dist, width) {
   return num_pill >= 2 ? (num_pill - 2) * width + (dist * 100 * (num_pill - 1)) : 0
}

// console.log(pillars(9, 20, 20));


function oddCount(n) {
   return Math.floor(n / 2)
}
// console.log(oddCount(15033));

function usdcny(usd) {
   return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

console.log(usdcny(35));