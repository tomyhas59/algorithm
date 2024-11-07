function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 중앙 인덱스 계산

    if (arr[mid] === target) {
      return mid; // 목표 값을 찾으면 인덱스를 반환
    } else if (arr[mid] < target) {
      left = mid + 1; // 목표 값이 중앙값보다 크면 오른쪽 절반 탐색
    } else {
      right = mid - 1; // 목표 값이 중앙값보다 작으면 왼쪽 절반 탐색
    }
  }

  return -1; // 목표 값이 없으면 -1을 반환
}

// 예시 사용
const numbers = [1, 3, 5, 7, 8, 10, 12];
const target = 8;
const result = binarySearch(numbers, target);
console.log(result); // 4 (타겟 값 8은 배열에서 4번째 인덱스에 위치)
