/* 
가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요. 
▣ 입력설명
첫 번째 줄에  문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.
 ▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 ▣ 입력예제 1 
teachermode e
 ▣ 출력예제 1
 1 0 1 2 1 0 1 2 2 1 0
*/

function solution(s, t) {
  let arr = Array(s.length).fill(Number.MAX_VALUE);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) min = 0;
    else min++;
    arr[i] = min;
  }

  min = Number.MAX_VALUE;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) min = 0;
    else min++;
    arr[i] = Math.min(min, arr[i]);
  }

  return arr;
}

console.log(solution("teachermode", "e"));
