function solution(deliveryMan, deliveryTime) {
    let execute_time = 0;
    let shipping_man = new Array(deliveryMan).fill(0);
    let clear_man = shipping_man.slice();

    while (true) {
        if (execute_time !== 0 && shipping_man.join("") === clear_man.join("")) {
            break;
        }

        shipping_man.forEach((v, index) => {
            if (v === 0 && deliveryTime.length !== 0) {
                shipping_man[index] = deliveryTime.shift();
            }
        });

        for (let i in shipping_man) {
            shipping_man[i] !== 0 && shipping_man[i]--;
        }
        execute_time++;
    }

    return execute_time;
}

const deliveryMan = 3;
const deliveryTime = [1, 2, 1, 3, 3, 3];

console.log("총 경과시간은 :", solution(deliveryMan, deliveryTime));


