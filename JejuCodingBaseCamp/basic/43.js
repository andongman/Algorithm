let number = Math.floor(Math.random() * 99 + 1);
const original = number;
let ary = [];

while (number) {
    ary.push(number % 2);
    number = Math.floor(number / 2);
}

console.log(`${original} is ${ary.reverse().join("")}`);