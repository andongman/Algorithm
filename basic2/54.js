function isContinuous(str) {
    const ary = str.split(" ");
    ary.sort((a, b) => a - b);

    return ary.join(" ") === str ? true : false;
}

// const str = "1 2 3 4 5";
const str = "1 4 2 6 3";

console.log(isContinuous(str));