function solution(str) {
    let res = "";
    let num = 50 - str.length;

    for (let i = 1; i <= num; i++) {
        i === Math.floor(num / 2) ? res += '=' + str : res += '=';
    }

    return res;
}

console.log(solution("hi"));




