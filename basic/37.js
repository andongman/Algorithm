let input = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
let obj = [];

input.split(" ").map(value => {
    if (Object.keys(obj).includes(value)) {
        obj[value] = obj[value] + 1;
    }
    else {
        obj[value] = 1;
    }
});

let winner = (Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b));

console.log(`${winner}(이)가 총 ${obj[winner]}표로 반장이 되었습니다.`);

