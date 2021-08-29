function solution(str, num) {
    const ary = str.split(" ");
    let res = [];

    function recursion(str, ary) {
        for (let i = 0; i < ary.length; i++) {
            res.push(str + ary[i]);
            recursion(str + ary[i], ary.slice(i + 1));
        }
    }
    
    recursion('', ary);

    res = res.filter(v => v.length === num);

    console.log(res);
    console.log(res.length);
}

solution("ㄱ ㄴ ㄷ ㄹ", 3);

