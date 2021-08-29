function solution(start, end) {
    let res = 0;

    for (let i = start; i <= end; i++) {
        String(i).split("").forEach(v => v === "1" && res++);
    }

    return res;
}

console.log(solution(0, 1000));