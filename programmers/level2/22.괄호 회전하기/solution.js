function solution(s) {
    let pattern = { "]": "[", "}": "{", ")": "(" }
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        let stack = [];
        let check = true;

        for (let j = 0; j < str.length; j++) {
            if (str[j] === "[" || str[j] === "{" || str[j] === "(") stack.push(str[j]);
            else {
                if (stack[stack.length - 1] !== pattern[str[j]]) {
                    check = false;
                    break;
                } else stack.pop();
            }
        }
        if (stack.length) check = false;
        check && answer++;
    }
    return answer;
}