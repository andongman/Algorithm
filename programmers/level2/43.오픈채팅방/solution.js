function solution(record) {
    let result = [];
    let memberList = {};

    record.forEach(ele => {
        const [routine, id, nickname] = ele.split(" ");
        if (routine === "Change" || routine === "Enter") memberList[id] = nickname;
    })

    record.forEach(ele => {
        const [routine, id, nickname] = ele.split(" ");
        if (routine === "Enter") result.push(`${memberList[id]}님이 들어왔습니다.`)
        else if (routine === "Leave") result.push(`${memberList[id]}님이 나갔습니다.`)
    })

    return result;
}