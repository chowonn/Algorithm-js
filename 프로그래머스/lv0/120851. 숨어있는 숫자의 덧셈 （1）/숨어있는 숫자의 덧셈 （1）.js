function solution(my_string) {
    let sum = 0;
    let answer = [];
    for(let i of my_string){
        if(!isNaN(i)){
           answer.push(i); //
            sum = answer.map(Number);  //문자 배열 숫자로 변환     
        }
    }
    return sum.reduce((a,b) => a+b);
}