function solution(m, musicinfos) {
    const melody = ["C", "H", "D", "I", "E", "F", "J", "G", "K", "A", "L", "B"];
    //C# => H, D#=> I, F#=> J, G#=> K , A#-> L
    let answer = [];
    m = m.replace(/C#/g, "H").replace(/D#/g, "I").replace(/F#/g, "J").replace(/G#/g, "K").replace(/A#/g, "L");

    musicinfos.forEach(v => {
        v = v.split(",");
        let startTime = v[0].split(":").map(v => parseInt(v));
        let endTime = v[1].split(":").map(v => parseInt(v));
        let loadingMinute = endTime[0] * 60 + endTime[1] - startTime[0] * 60 - startTime[1];
        let count = 0;
        v[3] = v[3].replace(/C#/g, "H").replace(/D#/g, "I").replace(/F#/g, "J").replace(/G#/g, "K").replace(/A#/g, "L");

        for (let sound of v[3]) {
            if (melody.includes(sound)) count++;
        }

        let song = v[3].repeat(Math.floor(loadingMinute / count)) + v[3].slice(0, loadingMinute % count);
        if (song.includes(m)) answer.push({ loadingMinute, title: v[2] });
    })

    if (!(answer.length)) return "(None)";
    else {
        answer.sort((a, b) => {
            if (a["loadingMinute"] !== b["loadingMinute"]) return b["loadingMinute"] - a["loadingMinute"];
        })
        return answer[0].title;
    }
}