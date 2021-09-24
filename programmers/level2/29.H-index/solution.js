function solution(citations) {
    let h = Math.max(...citations);
    if (h === 0) return 0;

    while (true) {
        let largeLen = 0;
        let smallLen = 0;

        for (let i = 0; i < citations.length; i++) {
            if (citations[i] > h) largeLen++;
            else if (citations[i] === h) {
                largeLen++;
                smallLen++;
            } else smallLen++;
        }
        // filter 문을 사용한 경우
        // let largeLen = citations.filter(v => v >= h).length;
        // let smallLen = citations.filter(v => v <= h).length;

        if (largeLen >= h && smallLen <= h) break;
        h--;
    }
    return h;
}