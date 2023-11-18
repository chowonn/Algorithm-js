function solution(x) {
    let answer = String(x).split('').reduce((arr, cur)=> Number(arr) + Number(cur) ,0 );
    let result = x % answer === 0;
    return result;
}