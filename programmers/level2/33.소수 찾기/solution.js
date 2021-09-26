function solution(numbers) {
    let ary = new Set();

    function permutation(ary, init, res) {
        for (let i = 0; i < ary.length; i++) {
            let rest = ary.slice(0, i).concat(ary.slice(i + 1));
            let replica = init + ary[i];
            permutation(rest, replica, res);

            let check = true;
            if (parseInt(replica) <= 1) continue;
            for (let j = 2; j <= Math.sqrt(parseInt(replica)); j++) {
                if (!(parseInt(replica) % j)) {
                    check = false;
                    break;
                }
            }
            check && res.add(parseInt(replica));
        }
    }
    permutation(numbers.split(""), "", ary);
    return ary.size;
}