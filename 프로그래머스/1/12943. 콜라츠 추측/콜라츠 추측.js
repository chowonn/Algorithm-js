function solution(num) {
    let answer = 0;
    let i=1;
   if(num===1){
       return 0;
   }
    
    while(i<501){
        num = num%2===0 ? num/2 : num*3+1;
        if(num===1){
            return i;
        }else{
            i+=1;
        }
    }
    return -1;
}