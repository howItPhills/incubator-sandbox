const array = [[1, 2, 3], [4, 5, 6], [10, 1, 22, 3]];

const multiplyer = (arr) => {
   let product = 0;
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
         product *= arr[i][j]
      }
   }
   return product
}


function filteredArray(arr, elem) {
   let newArr = [];
   // Only change code below this line
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) === -1) {
         newArr.push(arr[i])
      }
   }
   // Only change code above this line
   return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3));