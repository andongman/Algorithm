function solution(files) {
    let ary = [];

    files.forEach((v, idx) => {
        ary.push([]);
        let nIdx = [];
        let check = false;

        for (let i in v) {
            if (v[i].charCodeAt(0) >= 48 && v[i].charCodeAt(0) <= 57) {
                nIdx.push(Number(i));
                check = true;
            }
            if (check && (v[i].charCodeAt(0) < 48 || v[i].charCodeAt(0) > 57)) break;
        }
        ary[idx].push(v.slice(0, nIdx[0]));
        ary[idx].push(v.slice(nIdx[0], nIdx[nIdx.length - 1] + 1));
        ary[idx].push(v.slice(nIdx[nIdx.length - 1] + 1));
    })

    ary.sort((a, b) => {
        if (a[0].toLowerCase() !== b[0].toLowerCase()) return a[0].localeCompare(b[0]);
        else if (Number(a[1]) !== Number(b[1])) return Number(a[1]) - Number(b[1]);
        else return a - b;
    });

    return ary.map(v => v.join(""));
}