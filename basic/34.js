let orders = "176 156 155 165 166 169";
// let orders = "155 156 165 166 169 176";

orders === orders.split(" ").sort((a, b) => a - b).join(" ") ? console.log("Yes") : console.log("No");