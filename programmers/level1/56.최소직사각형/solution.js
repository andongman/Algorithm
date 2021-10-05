function solution(sizes) {
    sizes = sizes.map(v => v[0] > v[1] ? v : [v[1], v[0]]);
    return Math.max(...sizes.map(v => v[0])) * Math.max(...sizes.map(v => v[1]));
}