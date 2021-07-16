function quickSort(ary) {
    if (ary.length <= 1) {
        return ary;
    }

    const pivot = ary.shift();
    const left = [];
    const right = [];

    for (let i = 0; i < ary.length; i++) {
        if (ary[i] < pivot) {
            left.push(ary[i]);
        }
        else {
            right.push(ary[i]);
        }
    }

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

const ary = [3, 5, 7, 4, 1, 9, 2, 6, 8];

console.log(quickSort(ary));

