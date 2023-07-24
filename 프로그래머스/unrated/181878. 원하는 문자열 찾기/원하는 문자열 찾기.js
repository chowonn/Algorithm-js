function solution(myString, pat) {
    let answer = 0;
    let str1 = myString.toUpperCase();
    let str2 = pat.toUpperCase();
    return answer = str1.includes(str2) ? 1 : 0;
}