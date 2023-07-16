function solution(n) {
    let num = String(n);
    let answer = num.split("").map(Number);
    return answer.reduce((a,b) => (a+b));
   
    
}