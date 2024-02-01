function solution(food) {
    let answer = '';
    let arr = '';
    const Food = food.slice(1).map((v)=> parseInt(v/2));
    
    for(let i =0; i<Food.length; i++){
        arr += String(i+1).repeat(Food[i]);
    
    }
    
    let reverse = arr.split('').reverse().join('');
   
   
    return arr +0 +reverse;
}