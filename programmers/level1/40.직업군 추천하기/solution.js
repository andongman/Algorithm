function solution(table, languages, preference) {
    let sum = new Array(table.length).fill(0);

    languages.forEach((v, idx) => {
        table.sort().forEach((col, cIdx) => {
            let ary = col.split(" ");
            if (ary.includes(v)) sum[cIdx] += (6 - ary.indexOf(v)) * preference[idx];
        })
    });
    return table[sum.indexOf(Math.max(...sum))].split(" ")[0];
}