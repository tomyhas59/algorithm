//가장 짧은 문자 거리
function solution(s, t) {
  let answer = [];
  let tArr = [];
  let tIndex = -1;

  for (let x of s) {
    if (x === t) {
      tIndex = s.indexOf(x, tIndex + 1);
      tArr.push(tIndex);
    }
  }

  for (let i = 0; i < s.length; i++) {
    let min = [];
    for (let j = 0; j < tArr.length; j++) {
      min.push(Math.abs(i - tArr[j]));
    }
    answer.push(Math.min(...min));
  }

  return answer;
}

let arr = "teachermode";
console.log(solution(arr, "e"));
