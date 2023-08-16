function solution(num_list) {
    let odd = 0;
    let even = 0;
    let answer = num_list.map((a, list) => list%2===0 ? even+=a : odd+=a);
    
    return odd < even ? even : odd;
}