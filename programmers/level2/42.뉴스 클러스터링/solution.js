function solution(str1, str2) {
    let s1 = [];
    let s2 = [];
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    for (let i = 0; i < str1.length - 1; i++) {
        let slicing = str1.slice(i, i + 2);
        if (slicing[0].charCodeAt(0) >= 65 && slicing[0].charCodeAt(0) <= 90 && slicing[1].charCodeAt(0) >= 65 && slicing[1].charCodeAt(0) <= 90) s1.push(slicing);
    }

    for (let i = 0; i < str2.length - 1; i++) {
        let slicing = str2.slice(i, i + 2);
        if (slicing[0].charCodeAt(0) >= 65 && slicing[0].charCodeAt(0) <= 90 && slicing[1].charCodeAt(0) >= 65 && slicing[1].charCodeAt(0) <= 90) s2.push(slicing);
    }

    let replica = [...s2];
    let common = s1.filter(v => {
        if (replica.includes(v)) {
            let idx = replica.indexOf(v);
            replica.splice(idx, 1);
            return v;
        }
    })

    if (!(s1.length) && !(s2.length)) return 65536;
    return Math.floor((common.length * 65536) / (s1.length + s2.length - common.length));
}