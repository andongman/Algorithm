function solution(numbers, hand) {
    const rows = [4, 1, 1, 1, 2, 2, 2, 3, 3, 3];

    let leftPos = "*";
    let rightPos = "#";
    let leftDist = 0;
    let rightDist = 0;
    let answer = "";

    for (let v of numbers) {
        if (v === 1 || v === 4 || v === 7) {
            leftPos = v;
            answer += "L";
        } else if (v === 3 || v === 6 || v === 9) {
            rightPos = v;
            answer += "R";
        } else {
            if (leftPos === 1 || leftPos === 4 || leftPos === 7 || leftPos === "*")
                leftDist = leftPos === "*" ? Math.abs(rows[v] - 4) + 1 : Math.abs(rows[v] - rows[leftPos]) + 1;
            else
                leftDist = Math.abs(rows[v] - rows[leftPos]);

            if (rightPos === 3 || rightPos === 6 || rightPos === 9 || rightPos === "#")
                rightDist = rightPos === "#" ? Math.abs(rows[v] - 4) + 1 : Math.abs(rows[v] - rows[rightPos]) + 1;
            else
                rightDist = Math.abs(rows[v] - rows[rightPos]);

            if (leftDist === rightDist) {
                if (hand === "right") {
                    answer += "R";
                    rightPos = v;
                } else {
                    answer += "L";
                    leftPos = v;
                }
            } else if (leftDist > rightDist) {
                answer += "R";
                rightPos = v;
            } else {
                answer += "L";
                leftPos = v;
            }
        }
    }
    return answer;
}