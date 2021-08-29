let input = "97 86 75 66 55 97 85 97 97 95";
let ary = input.split(" ").map(value => Number(value)).sort((a, b) => b - a);
let result = [];
let number = 0;

ary.map(value => {
    if (result.length === 3) {
        return;
    }
    if (!result.includes(value)) {
        result.push(value);
    }
    number += 1;
})
console.log(number);
