/* 
0~9까지의 문자로 된 숫자를 입력 받았을 때, 이 입력 값이 0~9까지의 숫자가 각각 한 번 씩만 사용된 것인지 확인하는 함수를 구하시오.
*/

function solution(s) {
  const split = s.split(" ");
  let result = [];

  for (let word of split) {
    const count = Array(10).fill(0);

    for (let ch of word) {
      if (ch >= "0" && ch <= "9") {
        count[ch]++;
      } else {
        count[-1] = 1; // 숫자 아닌 문자가 있으면 무효
      }
    }

    // 0~9가 모두 1개씩 있는지 확인
    const isValid = count.every((v) => v === 1);
    result.push(isValid);
  }

  return result;
}

const s = "0123456789 01234 01234567890 6789012345 012322456789";
console.log(solution(s));
