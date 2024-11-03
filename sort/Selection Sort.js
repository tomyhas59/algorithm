//작은 요소를 맨 밑에 깔아준다.

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // i번째 위치에 올 가장 작은 값을 찾기 위한 인덱스
    let minIndex = i;

    // i+1부터 끝까지 순회하며 가장 작은 값의 인덱스를 찾음
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 현재 위치(i)와 최소값 위치(minIndex)를 교환
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 값 교환
    }
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(selectionSort(arr));
