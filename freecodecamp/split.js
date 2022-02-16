function splitify(str) {
   // Only change code below this line
   return str.split(/[ ,-.]/)

   // Only change code above this line
}

// console.log(splitify("Hello World,I-am code"));

function sentensify(str) {
   // Only change code below this line
   return str.split(/[ ,.-]/).join(' ')

   // Only change code above this line
}

// console.log(sentensify("May.the,force be-with-you"));


// Only change code below this line
function urlSlug(title) {
   return title
      .toLowerCase()
      .split(' ')
      .filter(item => item)
      .join('-')
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));