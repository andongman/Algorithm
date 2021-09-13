function solution(s) {
    let answer = "";
    let count = -1;
    s = s.toLowerCase();

    for (let i in s) {
        count++;
        if (s[i] === " ") count = -1;
        if (count === 0) answer += s[i].toUpperCase();
        else answer += s[i];
    }
    return answer;
}

// 기존의 풀이법
// function solution(s) {
//     return s.split(" ").map(v => v[0].toUpperCase() + v.slice(1).toLowerCase()).join(" ");
// }
