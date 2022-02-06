var printNumTwo;

for (var i = 0; i < 4; i++) {
   if (i === 2) {
      printNumTwo = function () {
         return i
      }
   }
}

console.log(printNumTwo()) //displays 4, not 2 cuz of var i = 0. The same would be if we assigned i outside of loop statement


//
for (let i = 0; i < 5; i++) {
   if (i === 3) {
      printNumTwo = function () {
         return i
      }
   }
}

console.log(printNumTwo()) // displays 3, cuz let i = 0


// var scopes globally only in blocks, segments of code. In functions it keeps local scope of a function