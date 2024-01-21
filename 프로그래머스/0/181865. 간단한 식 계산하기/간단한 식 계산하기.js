function solution(binomial) {
    const answer = binomial.split(' ');
   let result = 0;
    const a = answer[0];
    const b = answer[2];
    switch(answer[1]){
        case '+':
            result = Number(a) + Number(b)
            break;
             case '-':
            result = Number(a) - Number(b)
            break;
        case '*':
            result = Number(a)*Number(b)
            break;
            
    }
    

 
    
    console.log(result);
    return result;
}