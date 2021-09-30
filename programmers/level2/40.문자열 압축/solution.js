function solution(s) {
    let range = new Array(s.length).fill(0).map((_, idx) => idx + 1);
    let ary = [];

    range.map(slicingNum => {
        let replica = [...s.split("")];
        let stack = [replica.splice(0, slicingNum).join("")];
        let count = 1;
        let str = "";

        while (replica.length) {
            let value = replica.splice(0, slicingNum).join("");

            if (stack[stack.length - 1] === value) count++;
            else {
                if (count === 1) str += stack.pop();
                else str += count + stack.pop();
                count = 1;
                stack.push(value);
            }
        };
        if (stack.length) {
            if (count === 1) str += stack.pop();
            else str += count + stack.pop();
        }
        ary.push(str.length);
    })
    return Math.min(...ary);
}