let input = parseInt((Math.random() * 9) + 1, 10);
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`input = ${input}`)
console.log(ary.map((value) => (value) * input));