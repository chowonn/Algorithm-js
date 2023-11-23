function solution(arr, divisor) {
    const divisorArr = arr.filter((a) => a%divisor ===0).sort((a,b)=> a-b);
    const answer = divisorArr.length === 0 ? [-1] : divisorArr;
                         // console.log(divisorArr);
                             console.log(answer);
    return answer;
}