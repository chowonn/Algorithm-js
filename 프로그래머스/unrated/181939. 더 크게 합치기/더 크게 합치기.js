function solution(a, b) {
    let str1 = String(a) + String(b);
    let str2 = String(b) + String(a);
    return str1 >= str2 ? Number(str1) : Number(str2);
}