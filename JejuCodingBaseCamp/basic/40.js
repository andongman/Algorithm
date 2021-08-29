let input = "50 5 20 20 20 20 20";
let ary = input.split(" ").map(value => Number(value));

let limit = ary.shift();
let num = ary.shift();

let sum = 0;
let count = 0;

ary.forEach(value => {
    sum += value;
    if (sum > limit) {
        return;
    }
    count++;
});

console.log(`출력 : ${count}`);
