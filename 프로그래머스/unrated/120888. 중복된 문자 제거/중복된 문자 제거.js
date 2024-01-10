function solution(my_string) {
    let answer = [...new Set(my_string)].join('');
    console.log(answer);
    return answer;
}