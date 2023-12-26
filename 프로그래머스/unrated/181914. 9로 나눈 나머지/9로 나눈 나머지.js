function solution(number) {
     let answer = [...number].reduce((acc,cur)=>acc+Number(cur),0)%9;
    return answer;
}