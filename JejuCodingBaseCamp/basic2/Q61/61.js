function solution(str) {
    let ary = {};
    let res = ""

    str.split("").map(v => {
        if (ary[v]) {
            ary[v]++;
        }
        else {
            ary[v] = 1;
        }
    });

    Object.entries(ary).map(v => res += v[0] + v[1])

    console.log(res);
}

solution("aaabbbbcddddd");