function math(str) {
    let ary = str.split("").filter(v => v !== ' ');
    let stack = [];

    ary.map((v) => {
        v === "(" && stack.push(v);

        v === ")" &&
            (stack[stack.length - 1] === "(" ? stack.pop() : stack.push(v))
    })

    return stack.length === 0 ? true : false;
}


//test 1
// let str = "3 + 5";

// test2
// let str = "5 + 7) * (3 * 5)";

//test3˜
let str = "(5+(5 * (10+3))+10";

console.log(math(str));