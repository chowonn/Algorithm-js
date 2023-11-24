function solution(arr) {
    const smallNum = Math.min(...arr);
    const answer = arr.splice(arr.indexOf(smallNum),1);
    const result = arr.length ? arr : [-1];
    
    return result;
}

