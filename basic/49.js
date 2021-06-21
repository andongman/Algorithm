let input = "10 9 8 7 6 5 4 3 2 1";

console.log(input.split(" ").map(value => Number(value)).reduce((a, b) => a > b ? a : b));