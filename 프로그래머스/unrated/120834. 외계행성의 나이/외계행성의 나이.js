function solution(age) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const answer = String(age).split('').map((a)=> alphabet[a]).join('');
          console.log(answer);
    
    return answer;
}