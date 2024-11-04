function heapSort(arr) {
  const n = arr.length;

  // 최대 힙 구성
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 힙에서 요소를 하나씩 추출하여 정렬
  for (let i = n - 1; i > 0; i--) {
    // 루트(가장 큰 값)를 끝으로 보냄
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // 최대 힙 속성을 유지
    heapify(arr, i, 0);
  }

  return arr;
}

// 힙 구성 함수
function heapify(arr, n, i) {
  let largest = i; // 부모 노드
  const left = 2 * i + 1; // 왼쪽 자식
  const right = 2 * i + 2; // 오른쪽 자식

  // 왼쪽 자식이 부모보다 큰 경우
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // 오른쪽 자식이 현재 가장 큰 노드보다 큰 경우
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // 가장 큰 값이 부모 노드가 아니면 스왑 후 재귀 호출
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// 예시 사용
const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // [1, 3, 4, 5, 10]
