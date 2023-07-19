function solution(num_str) {

    let answer =num_str.split("").map(Number);
  let sum= answer.reduce((a, b) => a + b ,0);
   return sum;
}