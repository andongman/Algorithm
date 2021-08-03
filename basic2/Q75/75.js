function solution(input) {
    const number = Number(input);
    let res = 0;
    let ary;

    for (let i = 1; i <= number; i++) {
        ary = String(i).split("").map(v => Number(v)).filter(v => {
            if (v === 3 || v === 6 || v === 9) {
                return false;
            } else {
                return true;
            }
        })
        if (ary.length === 0) {
            res++;
        }
    }

    return res;
}

console.log(solution('93'));


