function solution(n, words) {
    let fakeWords = words.slice();
    let count = 0;
    let last = "";

    while (true) {
        let ary = fakeWords.splice(0, n);
        count++;

        for (let i = 0; i < ary.length; i++) {
            let prev = words.slice(0, ((count - 1) * n) + i);

            if ((last !== "" && ary[i][0] !== last) || prev.includes(ary[i])) return [i + 1, count];
            last = ary[i][ary[i].length - 1];
        }
        if (!(ary.length)) break;
    }
    return [0, 0];
}