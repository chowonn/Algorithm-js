// function solution(left, rigth){
//     let answer = 0;
//     let cnt = 0;
//     for(let i=left; i<=rigth; i++){
        
//         for(let j=1; j<=i; j++){
//             if(i%j===0){
//                 cnt+=1;
//                 }
//         }
//             if(cnt%2===0){
//                 answer+=i;
//             } else{
//                 answer-=i;
//             }
//         }
//       return answer;
    
//     }
      


// function solution(left, right) {
//     let answer = 0;
//     for(let i=left; i<=right; i++){
//         let cnt =0; // 약수의 개수
//         for(let j=1; j<=i; j++){
//             if(i%j===0){//약수 구하는 과정
//                 cnt+=1;
//             }
//                 if(cnt%2==0){
//                     answer +=j;
//                 }else{
//                     answer-=j;
//                 } 
//             }
                
//             }
        

//      return answer;
//     }
    

function solution(left, rigth){
    let answer = 0;
   
    for(let i=left; i<=rigth; i++){
         let cnt = 0;
        for(let j=1; j<=i; j++){
            if(i%j===0){
                cnt+=1;
                }
        }
            if(cnt%2===0){
                answer+=i;
            } else{
                answer-=i;
            }
        }
      return answer;
    
    }


