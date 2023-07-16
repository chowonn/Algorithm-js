function solution(numbers) {
    let answer = numbers.sort((a,b) => a-b);
    let max = (answer[answer.length-1]) * (answer[answer.length-2]);
    return max;
}