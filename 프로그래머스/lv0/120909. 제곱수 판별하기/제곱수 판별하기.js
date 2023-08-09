function solution(n) {
    let answer = ((n**(1/2)%1===0)) ? 1 :2;
    return answer;
}