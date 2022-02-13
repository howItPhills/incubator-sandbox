const removeVowels = str => str.match(/[^aeiou]/gi).join('')

console.log(removeVowels('Hi there'));