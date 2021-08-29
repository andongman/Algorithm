function solution(s) {
    let idx = 0;
    let res = '';

    for (let i in s) {
        if (s[i] === ' ') {
            idx = 0;
            res += ' ';
            continue;
        }
        res += (idx % 2) ? s[i].toLowerCase() : s[i].toUpperCase();
        idx++;
    }
    return res;
}