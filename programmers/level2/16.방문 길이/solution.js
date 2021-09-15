function solution(dirs) {
    let node = [0, 0];
    let ary = [];

    dirs.split("").forEach(v => {
        let path1 = node.join("");
        let path2 = node.join("");
        let check = true;

        if (v === "U" && node[1] !== 5) node[1]++;
        else if (v === "D" && node[1] !== -5) node[1]--;
        else if (v === "R" && node[0] !== 5) node[0]++;
        else if (v === "L" && node[0] !== -5) node[0]--;
        else check = false;

        path1 = path1 + node.join("");
        path2 = node.join("") + path2;
        if (!(ary.includes(path1)) && check) ary.push(path1, path2);
    })
    return ary.length / 2;
}
