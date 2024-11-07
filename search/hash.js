function hashSearch(hashTable, key) {
  if (key in hashTable) {
    return hashTable[key]; // 키에 해당하는 값을 반환
  }
  return null; // 키가 없으면 null 반환
}

// 예시 사용 (해시 테이블 표현: 객체 형태)
const hashTable = {
  apple: 1,
  banana: 2,
  cherry: 3,
};

console.log(hashSearch(hashTable, "banana")); // 2
console.log(hashSearch(hashTable, "grape")); // null
