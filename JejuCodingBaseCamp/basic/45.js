const date = new Date();

console.log(Math.floor(date.getTime() / (365 * 24 * 60 * 60 * 1000) + 1970));
