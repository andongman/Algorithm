const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
};

function solution(str) {
    if (!Object.keys(nationWidth).includes(str)) {
        console.log("no value");
        return false;
    }

    // const ary = [];
    // for (let i in nationWidth) {
    //     ary.push([i, nationWidth[i] - nationWidth[str]])
    // }

    const entry = Object.entries(nationWidth);

    entry.forEach(v => v[1] -= nationWidth[str]);
    entry.sort((a, b) => a[1] - b[1]);

    console.log(entry[1][0], entry[1][1]);
}

solution("korea");