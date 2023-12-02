function solution(a, b) {
    let answer = a.reduce((arr,cur,idx)=> arr+cur*b[idx],0);
    return answer;
}