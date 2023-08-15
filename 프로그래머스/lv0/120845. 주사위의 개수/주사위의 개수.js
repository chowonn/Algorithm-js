function solution(box, n) {
    let answer = box.reduce((acc, cur) => acc * Math.floor(cur / n) ,1);
    return answer;
}