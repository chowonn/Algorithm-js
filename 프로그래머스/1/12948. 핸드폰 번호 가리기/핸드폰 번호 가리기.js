function solution(phone_number) {
    let front =phone_number.slice(0, phone_number.length-4);
    let back = phone_number.slice(-4);
    
    return front.replaceAll(/[0-9]/gi,'*') + back;
  
}