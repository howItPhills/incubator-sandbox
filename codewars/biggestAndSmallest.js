const checkHighestAndLowest = str => {
   arr = str.split(' ').sort((a, b) => a - b)
   return `${arr[arr.length - 1]} ${arr[0]}`
}

console.log(checkHighestAndLowest("1 2 3 5 4"));