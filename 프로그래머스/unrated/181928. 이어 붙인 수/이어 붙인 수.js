function solution(num_list) {
    let odd = num_list.filter((a) => a%2===1).reduce((acc,cur) => acc+cur,"");
    let even = num_list.filter((a) => a%2===0).reduce((acc,cur) => acc+cur,"");
  // console.log(odd);
  //    console.log(even);
   
    return Number(odd) + Number(even);

}

