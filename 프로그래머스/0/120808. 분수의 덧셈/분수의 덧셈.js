function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1*denom2;
    let numer = numer1*denom2 + numer2*denom1; 
    let answer = 0;
    for(let i=1; i<=denom; i++){
        if(denom%i==0 && numer%i==0){
            answer = i;
        }
    }
      return [numer/answer, denom/answer];
}