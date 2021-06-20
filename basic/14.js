for (let i = 0; i < 3; i++) {
    let number = parseInt(Math.random() * 100, 10);

    console.log("입력 : ", number);
    number % 3 === 0 ? console.log("출력 :  짝\n") : console.log(`출력 :  ${number}\n`);
}