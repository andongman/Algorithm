function solution(a, b) {
    let date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let fromDay = 0;

    for (let i = 0; i < a - 1; i++) {
        fromDay += days[i];
    }
    let res = (fromDay + b) % 7 + 4;
    return res > 6 ? date[res - 7] : date[res];
}