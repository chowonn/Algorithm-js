// function solution(absolutes, signs) {
//     let answer = 0;
//     for(let i=0; i<absolutes.length; i++){
//         if(signs[i] === false){
//             answer += -absolutes[i];
//         }else{
//             answer += absolutes[i];
//         }
//     }
//     return answer;
// }

function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
 
                                  
