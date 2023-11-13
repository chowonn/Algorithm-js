function solution(n)
{
    let answer = String(n).split('').reduce((a,b) => Number(a) + Number(b) , 0 );
    return answer;
}