function sol(n) {
    n = n.split("");

    let answer = 0;
    let count = 1;
    const obj = { 3: 1, 6: 2, 9: 3 };

    while (n.length !== 0) {
        answer += obj[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }

    return answer;
}

console.log(sol('93'));