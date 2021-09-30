function solution(s) {
    let stack = [];

    if (s.length % 2) return 0;

    for (let i = 0; i < s.length; i++) {
        let value = s[i];

        if (stack[stack.length - 1] === value) stack.pop();
        else stack.push(value);

        if (stack.length > s.length - i) return 0;
    }

    return stack.length ? 0 : 1;
}