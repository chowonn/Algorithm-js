// function solution(names) {
//     const answer = names.filter((a,b)=> b%5===0 );
//     console.log(answer);
//     return answer;
// }

function solution(names){
    const answer = [];
    for(let i=0; i<names.length; i+=5){
        answer.push(names[i]);
    }
    return answer;
}