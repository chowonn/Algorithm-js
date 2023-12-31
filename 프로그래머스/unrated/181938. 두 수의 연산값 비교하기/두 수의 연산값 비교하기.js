function solution(a, b) {
    let sum = String(a)+String(b);
    let ab = 2*a*b;
 
    return sum >= ab ? Number(sum) : Number(ab);
}