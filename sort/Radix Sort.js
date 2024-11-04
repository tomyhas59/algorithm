function getMax(arr) {
  // 배열에서 가장 큰 수를 찾아 자릿수 확인
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function countingSort(arr, exp) {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  // 자릿수에 따라 count 배열에 값 저장
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  // count 배열을 수정하여 실제 위치 저장
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // output 배열에 정렬된 값 저장
  for (let i = arr.length - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // 원래 배열에 정렬된 값 복사
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  // 배열에서 가장 큰 수의 자릿수를 기준으로 반복
  const max = getMax(arr);

  // 자릿수별로 counting sort 수행
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
}

// 예시 사용
const array = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(array);
console.log(array); // [2, 24, 45, 66, 75, 90, 170, 802]
