function solution(str_list, ex) {
    let answer = str_list.filter(a => !a.includes(ex)).join('');
    return answer;
}