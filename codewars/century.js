function century(year) {
   // if (1 < year && year <= 100) {
   //    return 1;
   // } else if (year / 100 % Math.floor(year / 100)) {
   //    return Math.floor(year / 100) + 1
   // }
   // return Math.floor(year / 100)
   return Math.ceil(year / 100)
}

console.log(century(1901));