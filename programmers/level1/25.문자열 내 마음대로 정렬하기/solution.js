function solution(strings, n) {
    return strings.sort().sort((a, b) => a[n].charCodeAt(0) - b[n].charCodeAt(0));
}

// other solution
// function solution(strings, n) {
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }