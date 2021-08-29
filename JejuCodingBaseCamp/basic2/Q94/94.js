function solution(page, frame) {
    let memory = [];
    let execute_time = 0;
    let prior = []; //우선순위를 담을 배열

    if (frame === 0) {
        return page.length * 6;
    }

    for (let i of page) {
        if (memory.includes(i)) {
            let idx = memory.indexOf(i);

            prior.length === frame - 1 && prior.shift();
            prior.push(idx);

            execute_time += 1;
        }
        else if (memory.length === frame) {
            let idx;
            memory.forEach((_, index) => {
                if (!prior.includes(index)) {
                    idx = index;
                }
            });
            memory[idx] = i;
            prior.shift();
            prior.push(idx);

            execute_time += 6;
        }
        else {
            memory.push(i);

            prior.length === frame - 1 && prior.shift();
            let idx = memory.length - 1;
            prior.push(idx);

            execute_time += 6;
        }
    }
    return execute_time;
}

//test
const page = "BCBAEBCE";
const frame = 3;

//test
// const page = "ABCABCABC";
// const frame = 3;

//test
// const page = "ABCEDF";
// const frame = 3;

//test
// const page = "ABCDABEABCDE"
// const frame = 4;

console.log("실행시간은 :", solution(page, frame));