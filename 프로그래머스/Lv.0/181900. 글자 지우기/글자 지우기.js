function solution(my_string, indices) {
    let answer = [...my_string].filter((_,idx)=> !indices.includes(idx)).join('');
    console.log(answer);
    return answer;
}