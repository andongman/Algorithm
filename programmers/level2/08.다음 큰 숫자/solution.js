function solution(n) {
    let binaryNum = n.toString(2).split("").filter(v => v === "1").length;
    for (let i = n + 1; ; i++) {
        if (binaryNum === i.toString(2).split("").filter(v => v === "1").length) return i;
    }
}