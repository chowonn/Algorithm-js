function solution(my_string, alp) {
    let answer = my_string.split('').map(a => a === alp ? alp.toUpperCase() : a).join('');
    return answer;
}