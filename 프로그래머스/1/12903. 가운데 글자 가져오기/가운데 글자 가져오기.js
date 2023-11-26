function solution(s) {
    let answer = '';
    if(s.length % 2 !== 0){
            let oddStart = ((s.length + 1) / 2) - 1;
            answer =  s.slice(oddStart , oddStart+1);
    } else{
        let evenStart = (s.length / 2) - 1;
       answer = s.slice(evenStart, evenStart+2);
    }
    return answer;
}