const bubble = (result) => {
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i; j < result.length; j++) {
            if (result[j] > result[j + 1]) {
                let number = result[j];
                result[j] = result[j + 1];
                result[j + 1] = number;
            }
        }
    }
    return result;
}

const items = "4 2 3 8 5".split(" ").map(value => parseInt(value, 10));

console.log(bubble(items));