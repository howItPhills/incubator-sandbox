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
// console.log(confirmEnding("Bastian", "ian"))


function repeatStringNumTimes(str, num) {
   let newArr = []

   for (let i = 0; i < num; i++) {
      newArr.push(str)
   }

   return newArr.join('')
}

// console.log(repeatStringNumTimes("abc", 4));


function truncateString(str, num) {
   if (num < str.length) {
      return str.substring(0, num) + '...';
   } else {
      return str
   }
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

function findElement(arr, func) {
   let num = 0;
   for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
         return num = arr[i]
      }
   }
   return undefined;
}

// console.log(findElement([1, 3, 4, 5, 8, 9, 10], num => num % 2 === 0));


function booWho(bool) {
   return typeof bool === "boolean";
}

// console.log(booWho(null));


function titleCase(str) {
   const arr = str.split(' ')
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
   }
   return arr.join(' ')
}

// console.log(titleCase("I'm a liTTle tea pot"));

function frankenSplice(arr1, arr2, n) {
   const newArr1 = arr1.slice().reverse()
   const newArr2 = arr2.slice()
   for (let i = 0; i < newArr1.length; i++) {
      newArr2.splice(n, 0, newArr1[i])
   }
   return newArr2
}

// console.log(frankenSplice([1, 2, 3, 6], ["a", "b"], 1));

function bouncer(arr) {
   const newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
         newArr.push(arr[i])
      }
   }
   return newArr
}

// console.log(bouncer([7, "ate", "", false, 9]));


function getIndexToIns(arr, num) {
   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}

// console.log(getIndexToIns([40, 60], 50));

function mutation(arr) {
   for (let i = 0; i < arr[1].length; i++) {
      if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
         return false
      }
   }
   return true
}

// console.log(mutation(["hello", "Hel"]));


function chunkArrayInGroups(arr, size) {
   let newArr = [];
   const countOfParts = arr.length / size;
   for (let i = 0; i < countOfParts; i++) {
      const part = arr.splice(0, size)
      newArr.push(part)
   }
   return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));
