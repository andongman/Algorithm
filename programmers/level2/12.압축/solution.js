function solution(msg) {
    const ary = {};
    let idx = 1;
    let answer = [];

    for (let i = 65; i <= 90; i++) {
        ary[String.fromCharCode(i)] = idx++;
    }

    for (let msgIdx = 0; msgIdx < msg.length;) {
        let count = 1;
        let result;

        while (true) {
            let str = msg.slice(msgIdx, msgIdx + count);

            if (msgIdx + count - 1 === msg.length - 1 && Object.keys(ary).includes(str)) {
                result = ary[str];
                answer.push(result);
                count++;
                msgIdx += count - 1;
                break;
            } else if (Object.keys(ary).includes(str)) {
                result = ary[str];
                count++;
            } else {
                ary[str] = idx++;
                msgIdx += count - 1;
                answer.push(result);
                break;
            }
        }
    }
    return answer;
}