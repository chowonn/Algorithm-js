function solution(price) {
    let answer = 0;
    if(price < 100000){
         return answer = price;
    }else if((price >= 100000) && (price < 300000)){
       return answer = Math.floor(price*0.95);
    }else if((price >= 300000) && (price < 500000)){
          return answer = Math.floor(price*0.90);
    }else if(price >= 500000){
          return answer = Math.floor(price*0.80);
    }
}