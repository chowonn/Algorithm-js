function solution(my_string, s, e) {
    const answer = my_string.split('').slice(s,e+1).reverse().join('');
    const str1 = my_string.slice(0,s);
    const str2 = my_string.slice(e+1, my_string.length);
    const result = str1 + answer + str2;
    console.log(result);
    return result;
}