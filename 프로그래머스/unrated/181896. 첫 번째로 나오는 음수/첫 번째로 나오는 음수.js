function solution(num_list) {
    let answer = num_list.findIndex(a=> a<0);
    if(answer >= 0){
        return answer;
    }else{
        return -1;
    }
   
}