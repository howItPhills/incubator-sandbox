const obj1 = {
   myName: 'Alex',
   age: 18,
}

// destructuring with assigning to variables with the same names as object props
const { myName, age } = obj1;


// destructuring with assigning to variables with different than object props names
const { myName: myFirstName, age: myAge } = obj1; // myFirstName and myAge are new variables

// destructuring from nested objects

const obj2 = {
   user: {
      firstName: 'Alex',
      age2: 19,
   }
}

// with different varibales names
const { user: { firstName, age2 } } = obj2

//with new variables names
const { user: { firstName: myFirstName2, age2: myAge2 } } = obj2;


// destructuring an array
let a = 6, b = 8;

[a, b] = [b, a] //swapping values using array destructuring

