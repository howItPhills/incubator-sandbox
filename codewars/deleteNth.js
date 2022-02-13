const deleteNth = (arr, Ntimes) => {
   let newArr = []
   for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i]) || newArr.filter(n => n === arr[i]).length < Ntimes) {
         newArr.push(arr[i])
      }
   }
   return newArr
}