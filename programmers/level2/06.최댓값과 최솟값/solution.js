function solution(s) {
    return s.split(" ").sort((a, b) => a - b).filter((_, idx) => idx === 0 || idx === s.split(" ").length - 1).join(" ");
}