// function solution(arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i][j] === arr[j][i]) {
//                 return 1;
//             }
//             else{
//                 return 0;
//             }
//         }
//     }
//    }

function solution(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
         return 1;
    }
   }