function solution(s) {
    const answer = s.split(' ');
    let result = 0;
    for(let i=0; i<answer.length; i++){
        if(answer[i] === 'Z'){
            result -= Number(answer[i-1]);
        }else{
            result +=Number(answer[i]);
        }
    }
    return result;
}