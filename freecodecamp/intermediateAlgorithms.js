function sumAll(arr) {
   let sum = 0
   let newArr = arr.sort((a, b) => a - b)
   for (let i = newArr[0]; i <= newArr[newArr.length - 1]; i++) {
      sum += i
   }
   return sum
}

// console.log(sumAll([4, 1]));


function diffArray(arr1, arr2) {

   const diff1 = arr1.filter(item => !arr2.includes(item))
   const diff2 = arr2.filter(item => !arr1.includes(item))

   return diff1.concat(diff2)
}

// console.log(diffArray([1, 2, 3, 4, 5, 6], [1, 2, 3, 5, 7]));



function destroyer(arr, ...args) {
   return arr.filter(item => !args.includes(item))
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


function whatIsInAName(collection, source) {
   // const arr = [];
   // Only change code below this line

   return collection.find(item => item['last'] === source['last'])

   // Only change code above this line
   // return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));