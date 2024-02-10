function solution(myString) {
    let answer = myString.split("x").sort().filter((a)=>a);
    console.log(answer);
    return answer;
}