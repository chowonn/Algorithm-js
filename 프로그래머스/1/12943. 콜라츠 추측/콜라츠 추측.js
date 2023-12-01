// function solution(num) {
//     let answer = 0;
//     let i=1;
//    if(num===1){
//        return 0;
//    }
    
//     while(i<501){
//         num = num%2===0 ? num/2 : num*3+1;
//         if(num===1){
//             return i;
//         }else{
//             i+=1;
//         }
//     }
//     return -1;
// }

function solution(a){
        let count=0;
        function cola(b){
            if(count > 499) return -1;
            if(b === 1) return count;
            count++;
            b%2 === 0 ? cola(b/2) : cola((b*3)+1)
        }
        cola(a)
        return count > 499 ? -1 : count;
    }