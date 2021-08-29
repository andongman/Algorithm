let input = "10 2";
let ary = input.split(" ").map(value => Number(value));

console.log(ary[0] / ary[1], ary[0] % ary[1]);