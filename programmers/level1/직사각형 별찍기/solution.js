process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [row, col] = data.split(" ").map(v => parseInt(v, 10));
    for (let i = 0; i < col; i++) {
        let res = "";
        for (let j = 0; j < row; j++) {
            res += "*";
        }
        console.log(res);
    }
});