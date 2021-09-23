function solution(n) {
    let ary = [];
    for (let i = 0; i < n; i++) {
        ary[i] = new Array(i + 1).fill(-1);
    }

    let choice = ["left", "right", "arrow"];
    let choiceIdx = 0;
    let direction = choice[choiceIdx];

    let count = 0;
    let fillCount = n;
    let xpos = -1;
    let ypos = 0;

    for (let i = 1; i <= (n + n * (n - 1) / 2); i++) {
        if (direction === "left") xpos++;
        else if (direction === "right") ypos++;
        else {
            xpos--;
            ypos--;
        }
        ary[xpos][ypos] = i;
        count++;

        if (count === fillCount) {
            choiceIdx = (choiceIdx + 1) % 3;
            direction = choice[choiceIdx];
            fillCount--;
            count = 0;
        }
    }
    let result = [];
    ary.forEach(v => result.push(...v));

    return result;
}