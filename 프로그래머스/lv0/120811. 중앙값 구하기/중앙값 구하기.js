function solution(array) {
  let answer = array.sort((a,b) => b-a)[Math.floor(array.length/2)];
   
    return answer;
}