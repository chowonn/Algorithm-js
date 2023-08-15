function solution(my_string, num1, num2) {
    let answer = [...my_string];
    let str1 = my_string[num1];
    let str2 = my_string[num2];
    
    answer[num1] = str2;
    answer[num2] = str1;
    
    return answer.join('');
}