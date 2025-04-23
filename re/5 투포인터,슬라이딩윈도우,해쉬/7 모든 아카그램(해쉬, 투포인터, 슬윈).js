/* 
모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
 ▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
 ▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 ▣ 입력예제 1                                   
bacaAacba
 abc
 ▣ 출력예제 1
 3
*/

function solution(s, t) {
  const tMap = new Map();
  const sMap = new Map();
  const k = t.length;
  let answer = 0;

  // 1. tMap 구성
  for (let c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  // 2. s의 첫 윈도우 (k - 1 길이까지) 준비
  for (let i = 0; i < k - 1; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  // 3. 슬라이딩 윈도우 시작
  let lt = 0;
  for (let rt = k - 1; rt < s.length; rt++) {
    // 들어오는 문자
    sMap.set(s[rt], (sMap.get(s[rt]) || 0) + 1);

    // 해시맵 비교
    if (compareMaps(sMap, tMap)) answer++;

    // 나가는 문자
    const leftChar = s[lt];
    sMap.set(leftChar, sMap.get(leftChar) - 1);
    if (sMap.get(leftChar) === 0) sMap.delete(leftChar);
    lt++;
  }

  return answer;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (map2.get(key) !== val) return false;
  }
  return true;
}

console.log(solution("bacaAacba", "abc"));
