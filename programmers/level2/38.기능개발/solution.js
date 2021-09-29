function solution(progresses, speeds) {
    let executeDay = progresses.map((percent, idx) => Math.ceil((100 - percent) / speeds[idx]));
    let answer = [];

    while (executeDay.length) {
        let count = 1
        let value = executeDay[0];

        for (let i = 1; i < executeDay.length; i++) {
            if (value < executeDay[i]) break;
            count++;
        }
        executeDay.splice(0, count);
        answer.push(count);
    }

    return answer;
}