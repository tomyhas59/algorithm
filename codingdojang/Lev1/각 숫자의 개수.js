/* 
1~1000에서 각 숫자의 개수 구하기

예로 10 ~ 15 까지의 각 숫자의 개수를 구해보자

10 = 1, 0
11 = 1, 1
12 = 1, 2
13 = 1, 3
14 = 1, 4
15 = 1, 5

그러므로 이 경우의 답은 0:1개, 1:7개, 2:1개, 3:1개, 4:1개, 5:1개

*/

function solution(a, b) {
  let map = new Map();
  let answer;
  for (let i = a; i <= b; i++) {
    let str = String(i);
    for (let v of str) {
      if (map.has(v)) map.set(v, map.get(v) + 1);
      else map.set(v, 1);
    }
  }

  answer = [...map].sort((a, b) => Number(a[0]) - Number(b[0]));

  answer.forEach((v) => {
    console.log(`${v[0]}: ${v[1]}개`);
  });
}

solution(10, 15);
