let input = 5;

for (let i = 0; i < input; i++) {
    let string = '';
    let blank = '';

    for (let k = i; k < input; k++) {
        blank += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        string += '*';
    }
    console.log(blank + string);
}
