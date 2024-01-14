function solution(i, j, k) {
    let answer = 0;
    for(let a=i; a<=j; a++){
        String(a).split('').map((b)=>b.includes(k) && answer++);
    }
    return answer;
}