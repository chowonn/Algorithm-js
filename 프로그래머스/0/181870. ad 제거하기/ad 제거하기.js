function solution(strArr) {
    const answer = strArr.filter((a)=> !a.includes("ad"));
    return answer;
}