function solution(enter, leave) {
    let stack = [];
    let answer = {};

    for (let i = 0; i < enter.length; i++) {
        stack.push(enter[i]);

        if (stack.length >= 2) {
            stack.slice().forEach(v => {
                // 실패한 코드
                // if (answer[v] === undefined) answer[v] = [];
                // answer[v].push(...stack.slice().filter(val => val !== v));

                if (answer[v] === undefined) answer[v] = new Set();
                stack.slice().filter(val => val !== v).forEach(num => answer[v].add(num));
            })
        }

        while (leave.length && stack.includes(leave[0])) {
            stack.splice(stack.indexOf(leave[0]), 1);
            leave.shift();
        }
    }
    let result = new Array(enter.length).fill(0);

    for (let v of Object.keys(answer)) {
        result[Number(v) - 1] = answer[v].size;
    }
    return result;
}