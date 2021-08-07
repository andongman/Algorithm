function solution(total, order) {
    let ary = new Array(total).fill(0).map((v, idx) => v = idx + 1);
    let idx = 0;

    while (ary.length > 2) {
        if (idx > ary.length - 1) {
            idx -= ary.length;
        }

        ary.splice(idx, 1);
        idx += order;

        //기존의 ary에서 한 개의 값을 삭제 했기 때문에  -1을 시킨다.
        idx -= 1;
    }
    return ary;
}

console.log(solution(6, 3));