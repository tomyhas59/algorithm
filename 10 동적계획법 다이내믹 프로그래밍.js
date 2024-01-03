//계단오르기 다이내믹(원리 파악 중요)
function solution(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  const dy = new Array(n + 1);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy[n];
}
console.log(solution(7));
