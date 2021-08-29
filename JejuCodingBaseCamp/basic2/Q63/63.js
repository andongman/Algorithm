function solution(str) {
    let res = "";

    str.split(" ").map(v => res += v.slice(0, 1));

    console.log(res);
}

solution("복잡한 세상 편하게 살자");