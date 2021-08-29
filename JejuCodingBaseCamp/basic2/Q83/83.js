function math(str) {
    let ary = str.split("").filter(v => v !== ' ');
    let stack = [];

    let couple = {
        ')': '(',
        '}': '{'
    };

    ary.map((v) => {
        (v === "(" || v === "{") && stack.push(v);

        // ')' or '}' 인 경우
        if (couple[v]) {
            stack[stack.length - 1] === couple[v] ? stack.pop() : stack.push(v);
        }
    })
    return stack.length === 0 ? true : false;
}


//test 1
// let str = "5 + 7 * {(3 * 5)}"

// test2
let str = "5 + 7 ) { * (3 * 5)";


console.log(math(str));