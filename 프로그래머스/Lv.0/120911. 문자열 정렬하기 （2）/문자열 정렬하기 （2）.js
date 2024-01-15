function solution(my_string) {
    const answer = my_string.toLowerCase().split('').sort().join('');
    console.log(answer);
    return answer;
}