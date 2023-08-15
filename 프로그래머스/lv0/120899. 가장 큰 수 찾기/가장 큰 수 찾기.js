function solution(array) {
    let answer = Math.max(...array);
    let arr = [answer, array.indexOf(answer)];
    // console.log(arr);
    return arr;
}