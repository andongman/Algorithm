function solution(w, h) {
    let answer = 0;

    for (let x = 0; x < w; x++) {
        let first = -h * x / w + h;
        let second = -h * (x + 1) / w + h;
        answer += Math.ceil(first) - Math.floor(second);
    }
    return w * h - answer;
}