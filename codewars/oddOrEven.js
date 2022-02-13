const checkOddOrEven = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) % 2 === 0 ? "Even" : "Odd"
