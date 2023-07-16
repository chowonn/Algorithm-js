function solution(my_string) {
    const vowel = "aeiou";
    let arr = my_string.split("");
    let str = arr.filter((str)=>!vowel.includes(str)).join("");
    return str;
}