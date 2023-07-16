function solution(money) {
    let iceAmericano = 5500;
    let a = Math.floor(money / iceAmericano);
    let b = money % iceAmericano;
     let answer = [a,b];
    return answer;
}