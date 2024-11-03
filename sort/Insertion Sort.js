function insertionSort(arr) {
  // 배열의 각 요소를 순회
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // 현재 비교할 요소
    let j = i - 1;

    // key보다 큰 요소를 한 칸씩 오른쪽으로 이동
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // key를 정렬된 위치에 삽입
    arr[j + 1] = key;
  }
}

const arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr);
console.log("정렬된 배열:", arr);
