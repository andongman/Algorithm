function solution(id_list, report, k) {
  let log = {};
  let countList = {};

  for (let i = 0; i < id_list.length; i++) {
    log[id_list[i]] = [];
    countList[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    const [from, to] = report[i].split(" ");

    if (!log[from].includes(to)) {
      log[from].push(to);
      countList[to]++;
    }
  }

  const failList = [];
  const countArray = Object.entries(countList);

  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i][1] >= k) {
      failList.push(countArray[i][0]);
    }
  }

  const result = [];
  const logValueList = Object.values(log);

  for (let i = 0; i < logValueList.length; i++) {
    const count = logValueList[i].filter((v) => failList.includes(v)).length;
    result.push(count);
  }

  return result;
}
