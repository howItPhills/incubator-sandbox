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