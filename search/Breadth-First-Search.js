function bfs(graph, start) {
  const queue = [start]; // 시작 노드를 큐에 넣음
  const visited = new Set(); // 방문한 노드를 기록

  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 첫 번째 노드를 꺼냄
    if (!visited.has(node)) {
      visited.add(node); // 방문 처리
      console.log(node); // 방문한 노드 출력
    }

    // 현재 노드와 연결된 모든 노드를 큐에 추가
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
}

// 예시 사용 (그래프 표현: 객체 형태)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};

bfs(graph, "A"); // A -> B -> C -> D -> E -> F
