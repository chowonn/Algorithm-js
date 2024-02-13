function solution(emergency) {
    let answer = [...emergency].sort((a,b)=>b-a);
    let result = emergency.map((a)=> answer.indexOf(a)+1);
    return result;
}