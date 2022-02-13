const countVowels = str => {
   // const vowels = str.match(/[aeiou]/gi)
   // return vowels ? vowels.length : 0
   return (str.match(/[aeiou]/gi) || []).length
}


console.log(countVowels('my pyx'));