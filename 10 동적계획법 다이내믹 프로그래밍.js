//계단오르기 다이내믹(원리 파악 중요)
/* function solution(n) {
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
console.log(solution(7)); */

//돌다리 건너기
/* function solution(n) {
 
  const dy = new Array(n + 1);
  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
  }

  return dy[n + 1];
}
console.log(solution(7)); */

//최대 부분 증가수열
/* function solution(arr) {
  let answer = 0;

  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
    console.log(dy);
  }

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr)); */

//동전교환 (냅색 알고리즘)

function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
