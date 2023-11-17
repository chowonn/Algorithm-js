function solution(s){
    let arrP = s.split('').filter((a)=> ((a==='p')||(a==='P'))).length;
    let arrY = s.split('').filter((a)=> ((a==='y')||(a==='Y'))).length;
    let result = arrP === arrY ? true : false;

    
    console.log(result);

    return result;
}