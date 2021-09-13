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