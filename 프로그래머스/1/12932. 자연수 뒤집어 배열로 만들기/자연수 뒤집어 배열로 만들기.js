function solution(n) {
    let answer = String(n).split('');
    let result = answer.map((a) => Number(a)).reverse();
    return result;
}