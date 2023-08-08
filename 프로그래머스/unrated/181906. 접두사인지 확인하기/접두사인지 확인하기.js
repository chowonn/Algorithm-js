function solution(my_string, is_prefix) {
    let answer = my_string.indexOf(is_prefix) ? 0 : 1;
    return answer;
}