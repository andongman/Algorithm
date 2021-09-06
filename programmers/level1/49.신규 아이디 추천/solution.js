function solution(new_id) {
    let answer = "";

    for (let idx in new_id) {
        let val = new_id[idx].toLowerCase();

        if (val === "." && answer[answer.length - 1] === ".") continue;
        if (!("0123456789abcdefghijklmnopqrstuvwxyz-_.".includes(val))) continue;

        answer += val;
    }

    while (answer[0] === '.' || answer[answer.length - 1] === '.') {
        if (answer[0] === '.') answer = answer.slice(1);
        if (answer[answer.length - 1] === '.') answer = answer.slice(0, answer.length - 1);
    }

    if (!answer.length) answer = "a";

    answer = answer.slice(0, 15);

    while (answer[answer.length - 1] === '.') {
        if (answer[answer.length - 1] === '.') answer = answer.slice(0, answer.length - 1);
    }

    if (answer.length <= 2) answer = answer.padEnd(3, answer[answer.length - 1]);

    return answer;
}