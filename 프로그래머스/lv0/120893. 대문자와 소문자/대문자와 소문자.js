function solution(my_string) {
    let answer = my_string.split('').map((a) => a===a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('');
    return answer;
}