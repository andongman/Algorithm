function make_salary() {
    let ary = [];
    for (let i = 0; i < 100; i++) {
        ary.push(String(Math.floor(Math.random() * 100000000) + 1));
    }
    return ary;
}

function solution() {
    let salaryList = make_salary();
    let res = [];
    let s1, s2;

    salaryList.map(salary => {
        s1 = '';
        s2 = '';
        for (let v of salary) {
            if (v === '3' || v === '4' || v === '6') {
                if (v === '3') {
                    s1 += 2;
                    s2 += 1;
                }
                else if (v === '4') {
                    s1 += 2;
                    s2 += 2;
                }
                else {
                    s1 += 4;
                    s2 += 2;
                }
            }
            else {
                s1 += v;
                s2 += 0;
            }
        }
        res.push([s1, s2]);
    })
    return res;
}

console.log(solution());