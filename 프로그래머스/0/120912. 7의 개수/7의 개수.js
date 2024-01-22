function solution(array) {
    const answer = String(array).match(/7/g);
       console.log(answer);
    if(answer === null){
        return 0;
    }else{
        return answer.length;
    }   
}