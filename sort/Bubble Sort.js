//인접한 두 요소를 비교하며 큰 값을 뒤로 보내는 방식 O(n²)

function bubbleSort(a) {
  let answer = a;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(bubbleSort(arr));
