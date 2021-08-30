function solution(s) {
    let answer = true;

    if ((s.length === 4 || s.length === 6)) {
        s.split("").forEach(v => {
            if (v.charCodeAt(0) < 48 || v.charCodeAt(0) > 57) answer = false;
        })
    } else {
        answer = false;
    }
    return answer;
}