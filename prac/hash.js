function lengthOfLongestSubstring(s) {
  const charIndexMap = new Map(); // 각 문자의 마지막 인덱스를 저장
  let maxLength = 0;
  let start = 0; // 현재 부분 문자열의 시작 인덱스

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 중복 문자가 현재 부분 문자열 내에 존재하면 시작 인덱스를 이동
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, i); // 현재 문자의 인덱스 업데이트
    maxLength = Math.max(maxLength, i - start + 1); // 최대 길이 업데이트
  }

  return maxLength;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // 출력: 3
