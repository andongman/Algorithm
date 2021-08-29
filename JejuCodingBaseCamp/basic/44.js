let input = Math.floor(Math.random() * 999 + 1);

console.log(`${input} is ${input.toString().split("").map(value => Number(value)).reduce((a, b) => a + b)}`);