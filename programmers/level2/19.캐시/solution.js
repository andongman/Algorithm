function solution(cacheSize, cities) {
    let ary = [];
    let executeTime = 0;

    if (cacheSize === 0) return cities.length * 5;

    cities.forEach((v => {
        v = v.toLowerCase();
        if (ary.includes(v)) {
            executeTime++;
            ary.push(...ary.splice(ary.indexOf(v), 1));
        }
        else {
            if (ary.length === cacheSize) ary.shift();
            ary.push(v);
            executeTime += 5;
        }
    }));
    return executeTime;
}