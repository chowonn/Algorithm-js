function solution(myString) {
    let answer = myString.toLowerCase().split("").map(e =>{
        if(e === 'a'){
            return 'A'
        } else if(e !== 'A'){
            return e;
        }
    } );
    return answer.join('');
}