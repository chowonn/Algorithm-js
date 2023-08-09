function solution(rsp) {
    let answer = rsp.split("");
    return answer.map(a => a==5 ? 2 : a==0 ? 5 : 0).join("");
    // console.log(answer);
}