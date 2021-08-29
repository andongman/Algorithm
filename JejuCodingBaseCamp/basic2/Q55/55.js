const route = [];

function hanoi(num, start, to, by) {
    if (num === 1) {
        route.push([start, to]);
        return 1;
    }

    hanoi(num - 1, start, by, to);

    route.push([start, to]);

    hanoi(num - 1, by, to, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);