function solution(my_string) {
    let answer = my_string.split('').map(Number).filter(a => !isNaN(a)).sort((a,b) => a-b);
    console.log(answer);
    return answer;
}

