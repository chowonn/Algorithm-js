function solution(my_string) {
    let answer = my_string.split(' ').filter(a => a!=='');

    console.log(answer);
    return answer;
}