function solution(num_list) {
    let a = 0;
    let b = 0;
    let answer = [];
    for(let i=0; i<num_list.length; i++){
        let answer= (num_list[i] % 2 == 0) ? a++ : b++;
    }
    return [a,b];
}