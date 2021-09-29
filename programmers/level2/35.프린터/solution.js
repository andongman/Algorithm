function solution(priorities, location) {
    let stack = priorities.map((v, idx) => [v, idx]);
    const answer = [];

    while (stack.length) {
        let [value, index] = stack.shift();
        let rest = stack.slice(0);
        let max = Math.max(...rest.map(v => v[0]));

        if (value < max) stack.push([value, index]);
        else answer.push(index);
    }
    return answer.indexOf(location) + 1;
}