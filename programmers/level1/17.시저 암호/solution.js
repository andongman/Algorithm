function solution(s, n) {
    let answer = "";

    for (let v of s) {
        if (v === ' ') {
            answer += v;
        } else {
            let value = v.charCodeAt(0);

            //대문자인 경우
            if (value <= 90) {
                value += n;
                value = value > 90 ? value - 26 : value;
            } else {
                value += n;
                value = value > 122 ? value - 26 : value;
            }
            answer += String.fromCharCode(value);
        }
        return answer;
    }
}