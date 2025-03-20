/* 
격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다. 
10 13 10 12 15
 12 39 30 23 11
 11 25 50 53 15
 19 27 29 37 27
 19 13 30 13 19
 N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
니다.
 ▣입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 
▣출력설명
최대합을 출력합니다.
 ▣입력예제 1                                   
5
 10 13 10 12 15
 12 39 30 23 11
 11 25 50 53 15
 19 27 29 37 27
 19 13 30 13 19
 ▣출력예제 1
 155

*/

function solution(arr) {
  let maxSum = 0;
  let diag1 = 0,
    diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = 0,
      y = 0;
    for (let j = 0; j < arr.length; j++) {
      x += arr[i][j];
      y += arr[j][i];
    }
    // 두 개각선의 합
    diag1 += arr[i][i];
    diag2 += arr[i][arr.length - 1 - i];

    maxSum = Math.max(maxSum, x, y);
  }

  return Math.max(maxSum, diag1, diag2);
}

const grid = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(grid));
