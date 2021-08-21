function solution() {
    let student_score = [];
    let class_score = [];
    let total_score = [];

    for (let k = 0; k < 7; k++) {
        class_score = [];
        for (let j = 0; j < 30; j++) {
            student_score = [];
            for (let i = 0; i < 5; i++) {
                student_score.push(Math.floor(Math.random() * 100) + 1);
            }
            class_score.push(student_score);
        }
        total_score.push(class_score);
    }

    let total_avg = 0;

    total_score.map((c, idx) => {
        let sum = 0;
        let stu_sum = [];

        c.map(student => {
            student.map(grade => {
                sum += grade;
            })
            stu_sum.push(sum);
            sum = 0;
        })
        stu_sum.map(v => sum += v);

        console.log(`${idx + 1}반의 평균은 ${Math.floor(sum / 30 / 5)} 입니다.`)
        total_avg += Math.floor(sum / 30 / 5);

        console.log(`반 1등 점수는 ${Math.floor(stu_sum.sort((a, b) => b - a)[0] / 5)}`)
    })

    console.log(`전교 평균은 ${Math.floor(total_avg / 7)}입니다`)
}


solution();