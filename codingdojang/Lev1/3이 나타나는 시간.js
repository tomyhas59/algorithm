/* 
디지털 시계에 하루동안(00:00~23:59) n이 표시되는 시간을 초로 환산하면 총 몇 초(second) 일까요? 
디지털 시계는 하루동안 다음과 같이 시:분(00:00~23:59)으로 표시됩니다.
*/

function solution(n) {
  let h = 0;
  let m = 0;
  let answer = 0;
  while (h < 24) {
    m++;
    if (m === 60) {
      h++;
      m = 0;
    }
    const timeStr = h.toString() + m.toString();
    if (timeStr.includes(String(n))) {
      answer++;
    }
  }
  return answer * 60;
}

console.log(solution(3));
