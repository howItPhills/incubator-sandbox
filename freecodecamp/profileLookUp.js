// Setup
const contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function lookUpProfile(name, prop) {
   // Only change code below this line
   for (let i = 0; i < contacts.length; i++) {
      if (name !== contacts[i].firstName && i === contacts.length - 1) {
         return 'No such contact'
      } else if (name === contacts[i].firstName && !contacts[i][prop]) {
         return "No such property"
      } else if (name === contacts[i].firstName && contacts[i][prop]) {
         return contacts[i][prop]
      }
   }
   // Only change code above this line
}

console.log(lookUpProfile("Harry", "lastName"));