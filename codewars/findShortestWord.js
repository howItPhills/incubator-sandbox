function findShort(s) {

   return s.split(' ').sort((a, b) => a.length - b.length)[0].length;

   //SECOND SOLUTION
   // return Math.min(...s.split(' ').map(w => w.length))

}


console.log(findShort("turns out random test cases are easier than writing out basic ones"));