function solution(dots) {
    let answer = dots.sort((a,b) => a[0]-b[0]);
    return (answer[0][0]-answer[2][0]) * (answer[0][1]-answer[1][1]);
}