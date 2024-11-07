function dfs(graph, start, visited = new Set()) {
  visited.add(start); // 시작 노드를 방문 처리
  console.log(start); // 방문한 노드를 출력

  // 현재 노드와 연결된 모든 노드를 재귀적으로 방문
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
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

dfs(graph, "A"); // A -> B -> D -> E -> C -> F
