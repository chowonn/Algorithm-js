function solution(cipher, code) {
    let answer = [];
    for(let i=0; i <= cipher.length; i++){
        if(i % code === 0){
            answer.push(cipher[i-1]);
        }
    }
    return answer.join('');
}