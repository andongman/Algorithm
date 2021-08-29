let input = "AAABBBcccddd";

console.log(input.split("").map((value =>
    value === value.toUpperCase() ? value.toLowerCase() : value.toUpperCase())).join("")
);