function solution(myString, pat) {
    let answer = [...myString].map((a)=>a=='A'? 'B':'A').join('').includes(pat) ? 1 :0;
    console.log(answer);
    return answer;
}