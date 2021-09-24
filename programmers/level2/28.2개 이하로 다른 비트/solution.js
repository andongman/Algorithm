// 정확성 테스트 실패 코드
// function solution(numbers) {
//     let answer = [];

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = numbers[i] + 1; ; j++) {
//             let matchLen = (j ^ numbers[i]).toString(2).split("").filter(v => v === '1').length;
//             if (matchLen <= 2) {
//                 answer.push(j);
//                 break;
//             }
//         }
//     }
//     return answer;
// }

function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!(numbers[i] % 2)) answer.push(numbers[i] + 1);
        else {
            let binNum = numbers[i].toString(2);

            if (!(binNum.match(/0/g))) {
                let len = binNum.length;
                let value = Math.pow(2, len) + numbers[i] - Math.pow(2, len - 1);
                answer.push(value);
            } else {
                let reverseNum = binNum.split("").reverse().join("");
                let idx = reverseNum.indexOf("10");
                let curIdx = (binNum.length - 1) - (idx + 1);
                let value = binNum.slice(0, curIdx) + "10" + binNum.slice(curIdx + 2);
                answer.push(parseInt(value, 2));
            }
        }
    }
    return answer;
}