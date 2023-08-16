function solution(numbers) {
    let answer = numbers.sort((a,b) => a-b);
    let first = answer[0]*answer[1];
    let last =  answer[answer.length-1] * answer[answer.length-2];
    return first < last ? last : first;

   
}