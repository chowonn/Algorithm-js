function solution(n) {
    let answer = [];
    for (let i=0; i<n; i++) {
        let a = [];
    for (let j=0; j<n; j++) {
       a.push(i === j ? 1 : 0);
    }
        answer.push(a);
    }
    return answer;
}