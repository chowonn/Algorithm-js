// function solution(order) {
//     const num = ['3','6','9'];
//     const answer = String(order).split('').filter((a)=> num.includes(a)).length;
//     console.log(answer);
//     return answer;
// }

function solution(order) {
    const mySet = new Set([3,6,9]);
    return String(order).split('')
                        .filter(num => mySet.has(Number(num)))
                        .length;
}