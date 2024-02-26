function solution(s) {
    let array = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            array.push(s[i]);
        }
    }
    return array.sort((a, b) => a.localeCompare(b)).join("");
}