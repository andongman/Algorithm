function isWellBrackets(str) {
    const ary = str.split("");

    let stk = [];
    let top = -1;

    for (let i = 0; i < ary.length; i++) {
        let value = ary[i];

        if (value === ']') {
            if (top !== -1 && stk[top] === '[') {
                stk.pop();
                top--;
            }
            else {
                return false;
            }
        }
        else if (value === '}') {
            if (top !== -1 && stk[top] === '{') {
                stk.pop();
                top--;
            }
            else {
                return false;
            }
        }
        else if (value === ')') {
            if (top !== -1 && stk[top] === '(') {
                stk.pop();
                top--;
            }
            else {
                return false;
            }
        }
        else {
            stk.push(value);
            top++;
        }
    }
    return stk.length === 0 ? true : false;
}

const input = "({[]})";
console.log(isWellBrackets(input));

