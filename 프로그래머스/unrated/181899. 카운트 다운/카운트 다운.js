function solution(start, end) {
    let answer = [];
    for(let i=end; i<=start; i++){
        answer.unshift(i);
    }
    return answer;
}