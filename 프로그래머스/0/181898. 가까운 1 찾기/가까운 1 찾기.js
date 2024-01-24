function solution(arr, idx) {
    const answer = -1;
    for(let i=0; i<arr.length; i++){
        if(idx<=i && arr[i] ===1 ){
            return i;
        }
    }
    return answer;
}