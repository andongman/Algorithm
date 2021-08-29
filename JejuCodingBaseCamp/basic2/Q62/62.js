function solution() {
    let str = "aacdddddddddfffffffffgghhh";

    console.log(`${str.match(/a/g).length}${Number(str.match(/b/g))}${str.match(/c/g).length}${str.match(/d/g).length}${Number(str.match(/e/g))}${str.match(/f/g).length}${str.match(/g/g).length}${str.match(/h/g).length}`)
}

solution();