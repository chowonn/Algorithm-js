function solution(n) {
              let answer = 0  
    
    for(let i=1; i<=n; i++){ // n 까지 수 구하기
let count = 0;
        for(let j=1; j<=i; j++){
            if(i%j === 0 ){ // 약수 개수 확인  
                count+=1;

            }
           
            
        }
         if(count > 2){
                answer +=1;
            }
        
   
    }
    return answer;     
}

// 합성수 => 약수가 3개 이상 
// n 이하의 합성수 개수 구하기

// 1. 1~n 까지 +1 해서 n 탐색
// 2. 1번과 동시에 n 들의 약수 개수 구하기  -> 약수 조건 걸어서 찾기 

// 약수가 되려면? 나눴을 때 나머지가 0이어야함. 
// 약수를 구하는건 알겠는데 약수 갯수가 3개 이상인걸 어떻게 분리하지.. 