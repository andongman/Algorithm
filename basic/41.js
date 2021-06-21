let input = Math.floor((Math.random() * 99) + 1);
let i = 0;

for (i = 2; i < input; i++) {
    if (input % i === 0) {
        break;
    }
}

i > 1 && i === input ? console.log(`${input} is Yes`) : console.log(`${input} is No`);



