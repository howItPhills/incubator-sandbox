const reverse = (str) => {
   return str.split('').reverse().join('')
}

// console.log(reverse('Hello world'));

const factorialize = (num) => {
   let count = 1
   for (let i = 1; i <= num; i++) {
      count *= i
   }
   return count
}

// console.log(factorialize(10))


const findLongestWord = (str) => {
   return str.split(' ').sort((a, b) => b.length - a.length)[0].length
   // const hi = array.sort((a, b) => b.length - a.length)
   // return hi
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

function largestOfFour(arr) {
   let newArr = []
   for (let i = 0; i < arr.length; i++) {
      const largest = arr[i].sort((a, b) => b - a)[0]
      newArr.push(largest)
   }
   return newArr;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


function confirmEnding(str, target) {
   // return str.split('').reverse().join('').substring(0, target.length).split('').reverse().join('') === target;
   return str.substring(str.length - target.length) === target
}
console.log(confirmEnding("Bastian", "ian"))