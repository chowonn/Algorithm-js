function solution(arr, k) {
    let answer = arr.map(function(i,j){
         if(k%2==0){
            return i+k;
        }else{
            return i*k;
        }                 
                         
                         });
    return answer;
}