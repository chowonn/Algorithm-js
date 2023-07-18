function solution(strArr) {
    let answer = strArr.map(function(i,j){
        if(j%2 == 0){
         return i.toLowerCase();
        }else{
         return i.toUpperCase();
        }
    })
    return answer;
}
