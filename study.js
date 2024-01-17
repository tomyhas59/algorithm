//가장 짧은 문자 거리
function solution(s, t) {
  let answer = [];
  let tArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) tArr.push(i);
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
