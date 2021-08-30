function solution(arr) {
    let answer = [arr[0]];
    arr.forEach(v => (v !== answer[answer.length - 1]) && answer.push(v));
    return answer;
}

// other solution
// function solution(arr) {
//     return arr.filter((val, index) => val != arr[index + 1]);
// }