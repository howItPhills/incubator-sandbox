function whatIsInAName(collection, source) {
   // const arr = [];
   // Only change code below this line

   const key = Object.keys(source)

   return collection.filter(item => item[key] === source[key])

   // Only change code above this line
   // return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) 