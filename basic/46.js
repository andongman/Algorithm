let ary = [];

for (let i = 1; i <= 20; i++) {
    ary.push(i);
}

console.log(ary.join("").split("").map(value => Number(value)).reduce((a, b) => a + b));