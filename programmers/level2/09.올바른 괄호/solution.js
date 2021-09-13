function solution(s) {
    let stack = [];

    if (s.split("").filter(v => v === ")").length * 2 !== s.length) return false;
    // if (s.match(/\(/g).length * 2 !== s.length) return false;

    for (let v of s) {
        if (v === ")") {
            if (stack[stack.length - 1] === "(") stack.pop();
            else return false;
        } else stack.push(v);
    }
    return true;
}