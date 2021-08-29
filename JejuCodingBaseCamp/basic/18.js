let scores = "20 30 40";
let sum = 0;
scores.split(' ').map(score => sum += Number(score));

console.log(`출력 : ${parseInt((sum / scores.split(' ').length), 10)}`)
