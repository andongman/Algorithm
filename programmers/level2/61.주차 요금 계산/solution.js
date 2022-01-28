function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const obj = {};
  const answerObj = {};

  for (let i = 0; i < records.length; i++) {
    const [time, carNumber, type] = records[i].split(" ");
    const minute = getMinute(time);

    if (type === "OUT") {
      if (answerObj[carNumber]) {
        answerObj[carNumber] += minute - obj[carNumber];
        delete obj[carNumber];
        continue;
      }

      answerObj[carNumber] = minute - obj[carNumber];
      delete obj[carNumber];
    }

    if (type === "IN") {
      obj[carNumber] = minute;
    }
  }

  const _obj = Object.entries(obj);

  for (let i = 0; i < _obj.length; i++) {
    const lastMinute = getMinute("23:59");

    if (answerObj[_obj[i][0]]) {
      answerObj[_obj[i][0]] += lastMinute - _obj[i][1];
      continue;
    }

    answerObj[_obj[i][0]] = lastMinute - _obj[i][1];
  }

  const answerAry = Object.entries(answerObj);

  for (let i = 0; i < answerAry.length; i++) {
    if (answerAry[i][1] < basicTime) {
      answerAry[i][1] = basicFee;
      continue;
    }

    answerAry[i][1] =
      basicFee + Math.ceil((answerAry[i][1] - basicTime) / unitTime) * unitFee;
  }

  const sortedAnswerAry = answerAry.sort((a, b) => a[0] - b[0]);
  return sortedAnswerAry.map((v) => v[1]);
}

function getMinute(time) {
  const [hour, minute] = time.split(":");
  return Number(hour) * 60 + Number(minute);
}
