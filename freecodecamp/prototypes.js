function Bird(name, color) {
   this.name = name;
   this.color = color;
}

Bird.prototype.sayHi = function () {
   console.log('Hi')
}
Bird.prototype.legs = 4;

const newBird = new Bird('Jackie', 'Green');

// console.log(Object.prototype.isPrototypeOf(newBird)) // true
// console.log(Bird.prototype.isPrototypeOf(newBird)); //true

// console.log('sayHi' in newBird) // true
// console.log(newBird.hasOwnProperty('sayHi')) // false

