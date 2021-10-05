function solution(sizes) {
    sizes = sizes.map(v => v[0] > v[1] ? v : [v[1], v[0]]);
    return Math.max(...sizes.map(v => v[0])) * Math.max(...sizes.map(v => v[1]));
}

//good code
// function solution(sizes) {
    // const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0]);
//     return hor * ver;
// }