function solution(clothes) {
    let obj = {};

    for (let i = 0; i < clothes.length; i++) {
        let [name, kind] = clothes[i];

        if (obj[kind]) obj[kind].push(name);
        else obj[kind] = [name];
    }
    let answer = 1;
    let ary = Object.values(obj);

    for (let i = 0; i < ary.length; i++) {
        answer *= ary[i].length + 1;
    }
    return answer - 1;
} 