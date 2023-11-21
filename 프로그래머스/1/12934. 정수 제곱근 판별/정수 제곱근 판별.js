function solution(n) {
    let answer = Math.sqrt(n) + 1;
    let result = (Math.pow(answer,2) % answer) === 0 ? Math.pow(answer,2) : -1 ;
    return result;
}