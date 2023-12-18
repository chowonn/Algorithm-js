function solution(my_strings, parts) {
    let answer =my_strings.map((a,i)=> a.substring(parts[i][0], parts[i][1] +1)).join('');
    console.log(answer);
    return answer;
}