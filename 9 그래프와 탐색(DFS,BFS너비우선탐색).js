//경로탐색 DFS 인접행렬 노드 개수가 적을 때

/* function solution(arr, n) {
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
          DFS(i); //정점을 DFS로 넣어줌
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
console.log(solution(arr, 5)); */

//경로 탐색 인접리스트
/* function solution(arr, n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array());
  let route = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);

  function DFS(v) {
    if (v === n) {
      answer.push(route.slice());
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          route.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
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
];
console.log(solution(arr, 5));
 */

//미로 탐색
/* function solution(arr) {
  let n = arr.length;
  let answer = [];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let route = [];

  function DFS(x, y) {
    if (x === n - 1 && y === n - 1) {
      answer.push(route.slice());
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          route.push([nx, ny]);
          DFS(nx, ny);
          arr[nx][ny] = 0;
          route.pop();
        }
      }
    }
  }

  //  function DFS(dx, dy) {
  //   if (dx === n - 1 && dy === n - 1) {
  //     answer.push(route.slice());
  //   } else {
  //     if (dx >= 0 && dy >= 0 && dx < n && dy < n && arr[dx][dy] === 0) {
  //       arr[dx][dy] = 1;
  //       route.push([dx, dy]);
  //       DFS(dx - 1, dy);
  //       DFS(dx, dy + 1);
  //       DFS(dx + 1, dy);
  //       DFS(dx, dy - 1);
  //       arr[dx][dy] = 0;
  //       route.pop();
  //     }
  //   }
  // }
  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
console.log(solution(arr)); */

//이진트리 넓이우선탐색(BFS) 최단거리 구할 때

/* function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7);
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
 */

//송아지 찾기 BFS 상태트리탐색
/* function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        dis[nx] = dis[x] + 1;
        queue.push(nx);
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
 */

//섬라나 아일랜드 (DFS 활용)
function solution(n, arr) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    arr[x][y] = 0;
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
console.log(solution(7, arr));
