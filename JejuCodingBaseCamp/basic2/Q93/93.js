function solution(page, frame) {
    let memory = [];
    let execute_time = 0;

    if (frame === 0) {
        return page.length * 6;
    }

    for (let i of page) {
        //공통값이 있는 경우
        if (memory.includes(i)) {
            execute_time += 1;
        }
        // 공통값이 없고, 메모리가 꽉 찬 경우
        else if (memory.length === frame) {
            memory.shift();
            memory.push(i);
            execute_time += 6;
        }
        //공통 값이 없고 메모리가 비어있는 경우
        else {
            memory.push(i);
            execute_time += 6;
        }
    }
    return execute_time;
}

//test
const page = "BCBAEBCE"
const frame = 3;

//test
// const page = "ABCABCABC"
// const frame = 3;

//test
// const page = "ABCDABEABCDE"
// const frame = 4;

//test
// const page = "ABCEDF"
// const frame = 0;

//test
// const page = "ABCDABEA"
// const frame = 3;

console.log("실행시간은 :", solution(page, frame));
