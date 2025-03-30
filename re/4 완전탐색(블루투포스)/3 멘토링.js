/* 
멘토링
현수네반선생님은반학생들의수학점수를향상시키기위해멘토링시스템을만들려고합니
다멘토링은멘토도와주는학생와멘티도움을받는학생가한짝이되어멘토가멘티의. ( ) ( )
수학공부를도와주는것입니다.
선생님은번의수학테스트등수를가지고멘토와멘티를정합니다M .
만약학생이멘토이고학생이멘티가되는짝이되었다면학생은번의수학테스트에서A , B , A M
모두학생보다등수가앞서야합니다B .
번의수학성적이주어지면멘토와멘티가되는짝을만들수있는경우가총몇가지인지M
출력하는프로그램을작성하세요.
 ▣입력설명
첫번째줄에반학생수과이주어진다N(1<=N<=20) M(1<=M<=10) .
두번째줄부터개의줄에걸쳐수학테스트결과가학생번호로주어진다학생번호가제일M .
앞에서부터등등등순으로표현된다1 , 2 , ...N .
만약한줄에이고테스트결과가로입력되었다면번학생이등번학생이N=4 , 3142 3 1 , 1
등번학생이등번학생이등을의미합니다2 , 4 3 , 2 4 .
 ▣출력설명
첫번째줄에짝을만들수있는총경우를출력합니다.
 ▣입력예제1
 43
 3412
 4321
 3142
 ▣출력예제1
 3
와같이가지경우의멘토멘티짝을만들수있다(3, 1), (3, 2), (4, 2) 3 ( , ) .

*/

function solution(arr) {
  let num = 0;

  for (let i = 1; i <= arr[0].length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      if (i === j) continue;

      let isValid = true;

      for (let exam of arr) {
        let iRank = exam.indexOf(i);
        let jRank = exam.indexOf(j);

        if (iRank > jRank) {
          isValid = false;
          break;
        }
      }
      if (isValid) num++;
    }
  }

  return num;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
