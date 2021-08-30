function solution(seoul) {
    let answer;
    seoul.forEach((v, idx) => { if (v === "Kim") answer = idx });
    return `김서방은 ${answer}에 있다`;
}

