function solution(intStrs, k, s, l) {
    let arr = [];
    let answer = intStrs.map((a)=> parseInt(a.slice(s,s+l)));
    for(let i=0; i<answer.length; i++){
        if(k < answer[i]){
            arr.push(answer[i]);
                 }
    }

    return arr;
}