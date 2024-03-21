function solution(myString, pat) {
    const answer = myString.lastIndexOf(pat);
    console.log(answer);
    return myString.slice(0,answer)+pat;
}