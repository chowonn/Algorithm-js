// function solution(my_string, indices) {
//     let answer = [...my_string].filter((_,idx)=> !indices.includes(idx)).join('');
//     console.log(answer);
//     return answer;
// }

function solution(my_string, indices) {
  const set = new Set(indices);
  return [...my_string].filter((_, i) => !set.has(i)).join('');
}