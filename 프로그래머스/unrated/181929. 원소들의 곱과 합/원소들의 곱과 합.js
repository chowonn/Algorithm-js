function solution(num_list) {
    let sum1 = 1;
    let sum2 = 0;
    for(let i of num_list){
        sum1*=i;
        sum2+=i;
    }
    return sum1 < Math.pow(sum2,2) ? 1 : 0;
}