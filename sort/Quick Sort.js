function quickSort(arr) {
  // 배열의 길이가 1 이하일 때는 이미 정렬된 상태이므로 그대로 반환
  if (arr.length <= 1) {
    return arr;
  }

  // 피벗 선택 (중간 값으로 선택)
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // 피벗보다 작은 값과 큰 값을 담을 배열
  const left = [];
  const right = [];

  // 피벗을 기준으로 분할
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue; // 피벗은 건너뜀
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 분할한 두 배열에 대해 재귀 호출 후, 결과를 합침
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 예시 사용
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log(sortedArray); // [1, 1, 2, 3, 6, 8, 10]
