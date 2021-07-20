function solution(str) {
    let res = "";
    let num = 50 - str.length;

    for (let i = 1; i <= num; i++) {
        i === Math.floor(num / 2) ? res += '=' + str : res += '=';
    }

    return res;
}

console.log(solution("hi"));


// padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 
// 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.

// padEnd() 메서드는 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다.
// 채워넣기는 대상 문자열의 끝(우측)부터 적용됩니다.

