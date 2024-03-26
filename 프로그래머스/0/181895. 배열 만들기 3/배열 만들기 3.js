function solution(arr, intervals) {
  const answer = [];
  for (let i = 0; i<intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];
    for (let j = start; j <= end; j++) {
      answer.push(arr[j]);
    }
  }
  return answer;
}
