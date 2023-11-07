function solution(n) {
    const answer = [];
    let sum = 0; 
    for(i=1; i<=n; i++){
        if(n%i === 0){
             answer.push(i);
            sum = answer.reduce((a,b) => a+b , 0)
        };
    }
    return sum;
}