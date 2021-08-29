let input = "Javascript";

input.split("").forEach((value, index, ary) =>
    index !== ary.length - 1 && console.log(input[index], input[index + 1])
);