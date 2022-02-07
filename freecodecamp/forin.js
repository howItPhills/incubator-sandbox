const users = {
   Alan: {
      online: true
   },
   Jeff: {
      online: true
   },
   Sarah: {
      online: false
   }
}

function countOnline(usersObj) {
   let count = 0
   for (let user in usersObj) {
      if (users[user].online === true) {
         count++
      }
      // console.log(users[user].online)
   }
   return count
}

// console.log(countOnline(users))

let user = {
   name: 'Kenneth',
   age: 28,
   data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
         'Sam',
         'Kira',
         'Tomo'
      ],
      location: {
         city: 'San Francisco',
         state: 'CA',
         country: 'USA'
      }
   }
};

function addFriend(userObj, friend) {
   // Only change code below this line
   for (let key in userObj) {
      if (key === 'data') {
         userObj[key].friends.push(friend)
         return userObj[key].friends
      }
   }
   // Only change code above this line
}

console.log(addFriend(user, 'Pete'));