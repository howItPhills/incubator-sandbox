const findFriend = (arr) => {
   return arr.filter(friend => friend.length === 4 && !Number(friend))
}

console.log(findFriend(['Kyle', 'Rachel', '1', '123']));