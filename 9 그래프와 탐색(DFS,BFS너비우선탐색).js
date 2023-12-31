//경로탐색 DFS 인접행렬 노드 개수가 적을 때

function solution(arr, n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let route = [];

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  console.log(graph);

  function DFS(v) {
    if (v === n) {
      answer.push(route.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] && ch[i] === 0) {
          ch[i] = 1;
          route.push(i);
          DFS(i);
          ch[i] = 0;
          route.pop();
        }
      }
    }
  }
  route.push(1);
  //1부터 시작이니 1을 처음에 넣어놓기
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(arr, 5));
